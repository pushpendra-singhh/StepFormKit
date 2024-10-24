import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormConfig, StepConfig } from '../models/form-config.model';

@Injectable({
  providedIn: 'root'
})
export class FormStateService {
  private formConfigSubject = new BehaviorSubject<FormConfig | null>(null);
  private formDataSubject = new BehaviorSubject<any>(null);
  private currentStepIndexSubject = new BehaviorSubject<number>(0);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  formConfig$: Observable<FormConfig | null> = this.formConfigSubject.asObservable();
  formData$: Observable<any> = this.formDataSubject.asObservable();
  currentStepIndex$: Observable<number> = this.currentStepIndexSubject.asObservable();
  loading$: Observable<boolean> = this.loadingSubject.asObservable();
  error$: Observable<string | null> = this.errorSubject.asObservable();

  setFormConfig(config: FormConfig): void {
    this.formConfigSubject.next(config);
  }

  setFormData(data: any): void {
    this.formDataSubject.next(data);
  }

  setCurrentStepIndex(index: number): void {
    this.currentStepIndexSubject.next(index);
  }

  setLoading(isLoading: boolean): void {
    this.loadingSubject.next(isLoading);
  }

  setError(error: string | null): void {
    this.errorSubject.next(error);
  }

  addStep(step: StepConfig): void {
    const currentConfig = this.formConfigSubject.getValue();
    if (currentConfig) {
      currentConfig.steps.push(step);
      this.formConfigSubject.next(currentConfig);
    }
  }

  removeStep(stepId: string): void {
    const currentConfig = this.formConfigSubject.getValue();
    if (currentConfig) {
      currentConfig.steps = currentConfig.steps.filter(step => step.id !== stepId);
      this.formConfigSubject.next(currentConfig);
    }
  }

  saveProgress(): void {
    if (this.formConfigSubject.getValue()?.persistProgress) {
      localStorage.setItem('formProgress', JSON.stringify(this.formDataSubject.getValue()));
    }
  }

  loadProgress(): void {
    const savedProgress = localStorage.getItem('formProgress');
    if (savedProgress) {
      this.formDataSubject.next(JSON.parse(savedProgress));
    }
  }

  clearProgress(): void {
    localStorage.removeItem('formProgress');
  }
}