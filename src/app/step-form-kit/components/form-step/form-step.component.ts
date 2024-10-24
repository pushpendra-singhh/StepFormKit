import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StepConfig, FieldConfig } from '../../models/step-config.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-step',
  templateUrl: './form-step.component.html',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  styles: []
})
export class FormStepComponent {
  @Input() stepConfig!: StepConfig;
  @Input() formGroup!: FormGroup;
  @Input() isFieldVisible!: (field: FieldConfig) => boolean;
  @Input() isFieldEditable!: (field: FieldConfig) => boolean;
}