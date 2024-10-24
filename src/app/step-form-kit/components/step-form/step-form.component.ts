import { Component, OnInit, OnDestroy, ElementRef, ViewChild, ChangeDetectorRef, Input, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepConfig, FieldConfig, FormConfig } from '../../models/form-config.model';
import { ApiService } from '../../services/api.service';
import { FormStateService } from '../../services/form-state.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.scss'],
  animations: [
    trigger('stepTransition', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class StepFormComponent implements OnInit, OnDestroy {
  @ViewChild('formContainer') formContainer!: ElementRef;
  @Input() set formConfig(value: FormConfig) {
    this._formConfig = value;
    this.initForm();
  }
  get formConfig(): FormConfig {
    return this._formConfig;
  }
  @Input() set initialData(value: any) {
    this._initialData = value;
    if (this.form) {
      this.form.patchValue(value);
      this.updateProgress();
    }
  }
  
  private _formConfig!: FormConfig;
  private _initialData: any;
  form!: FormGroup;
  currentStepIndex = 0;
  submitted = false;
  loading = false;
  apiError: string | null = null;
  formSubmitted = false;
  progressPercentage = 0;

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private formStateService: FormStateService,
    private cdr: ChangeDetectorRef,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    this.formStateService.loading$
      .pipe(takeUntil(this.destroy$))
      .subscribe(isLoading => {
        this.loading = isLoading;
        this.cdr.detectChanges();
      });

    this.formStateService.error$
      .pipe(takeUntil(this.destroy$))
      .subscribe(error => {
        this.apiError = error;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initForm(): void {
    this.form = this.fb.group({});
    this.formConfig.steps.forEach(step => {
      const stepGroup = this.fb.group({});
      step.fields.forEach(field => {
        stepGroup.addControl(field.name, this.fb.control({ value: '', disabled: false }, this.getValidators(field)));
      });
      this.form.addControl(step.id, stepGroup);
    });

    if (this._initialData) {
      this.form.patchValue(this._initialData);
    }

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.updateProgress();
      });

    this.currentStepIndex = 0;
    this.submitted = false;
    this.formSubmitted = false;
    this.updateProgress();
    this.cdr.detectChanges();
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.formStateService.setLoading(true);
      this.apiService.submitFormData(this.form.value).subscribe(
        (response) => {
          this.formSubmitted = true;
          this.formStateService.setLoading(false);
        },
        (error) => {
          this.formStateService.setError('Error submitting form');
          this.formStateService.setLoading(false);
        }
      );
    } else {
      this.scrollToFirstInvalidControl();
    }
  }

  isStepVisible(step: StepConfig): boolean {
    return !step.condition || step.condition(this.form.value);
  }

  isFieldVisible(field: FieldConfig): boolean {
    return !field.condition || field.condition(this.form.value);
  }

  isFieldEditable(field: FieldConfig): boolean {
    return field.editable !== false;
  }

  previousStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.scrollToTop();
    }
  }

  nextStep(): void {
    const currentStep = this.formConfig.steps[this.currentStepIndex];
    const stepGroup = this.form.get(currentStep.id) as FormGroup;
    
    if (stepGroup && stepGroup.valid) {
      if (this.currentStepIndex < this.formConfig.steps.length - 1) {
        this.currentStepIndex++;
        this.scrollToTop();
      }
    } else {
      Object.keys(stepGroup.controls).forEach(key => {
        const control = stepGroup.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
      this.scrollToFirstInvalidControl();
    }
  }

  private scrollToFirstInvalidControl(): void {
    const firstInvalidControl = this.formContainer.nativeElement.querySelector('input.ng-invalid, select.ng-invalid, textarea.ng-invalid');
    if (firstInvalidControl) {
      firstInvalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  private scrollToTop(): void {
    this.formContainer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private updateProgress(): void {
    const totalFields = this.getTotalFieldCount();
    const completedFields = this.getCompletedFieldCount();
    this.progressPercentage = totalFields > 0 ? Math.round((completedFields / totalFields) * 100) : 0;
    this.cdr.detectChanges();
  }

  private getTotalFieldCount(): number {
    return this.formConfig.steps.reduce((total, step) => {
      if (this.isStepVisible(step)) {
        return total + step.fields.filter(field => this.isFieldVisible(field)).length;
      }
      return total;
    }, 0);
  }

  private getCompletedFieldCount(): number {
    return this.formConfig.steps.reduce((total, step) => {
      if (this.isStepVisible(step)) {
        const stepGroup = this.form.get(step.id) as FormGroup;
        return total + step.fields.filter(field => 
          this.isFieldVisible(field) && 
          stepGroup.get(field.name)?.valid &&
          stepGroup.get(field.name)?.value !== null &&
          stepGroup.get(field.name)?.value !== ''
        ).length;
      }
      return total;
    }, 0);
  }

  createInjector(field: FieldConfig, step: StepConfig): Injector {
    return Injector.create({
      providers: [
        { provide: 'field', useValue: field },
        { provide: 'step', useValue: step },
        { provide: 'form', useValue: this.form }
      ],
      parent: this.injector
    });
  }

  getErrorMessage(field: FieldConfig, errors: any): string {
    if (typeof field.errorMessage === 'function') {
      return field.errorMessage(errors);
    }
    return field.errorMessage || 'Invalid input';
  }

  private getValidators(field: FieldConfig) {
    const validators = [];
    if (field.required) {
      validators.push(Validators.required);
    }
    if (field.type === 'email') {
      validators.push(Validators.email);
    }
    if (field.validators) {
      validators.push(...field.validators);
    }
    return validators;
  }
}