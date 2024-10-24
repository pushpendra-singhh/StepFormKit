import { ValidatorFn } from '@angular/forms';

export interface FieldOption {
  value: string;
  label: string;
}

export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'select' | 'checkbox' | 'radio' | 'date' | 'custom';
  required: boolean;
  errorMessage: string | ((error: any) => string);
  placeholder?: string;
  options?: FieldOption[];
  validators?: ValidatorFn[];
  condition?: (formValue: any) => boolean;
  editable?: boolean;
  customComponent?: any; // For custom field types
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
  theme?: 'light' | 'dark' | 'custom';
  customStyles?: { [key: string]: string };
  onStepChange?: (fromStep: number, toStep: number, formValue: any) => boolean;
  onSubmit?: (formValue: any) => Promise<any>;
  persistProgress?: boolean;
}