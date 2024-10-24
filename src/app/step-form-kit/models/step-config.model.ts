import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'select' | 'checkbox' | 'radio' | 'date';
  required: boolean;
  errorMessage: string;
  condition?: (formValue: any) => boolean;
  editable?: boolean;
  validators?: ValidatorFn[];
  options?: { value: string; label: string }[];
  placeholder?: string;
}

export interface StepConfig {
  id: string;
  title: string;
  description?: string;
  fields: FieldConfig[];
  condition?: (formValue: any) => boolean;
}

export interface FormConfig {
  id: string;
  title: string;
  steps: StepConfig[];
  submitButtonText?: string;
  cancelButtonText?: string;
}