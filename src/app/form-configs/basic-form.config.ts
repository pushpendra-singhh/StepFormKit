import { FormConfig } from '../step-form-kit/models/form-config.model';

export const basicFormConfig: FormConfig = {
  id: 'basicForm',
  title: 'Basic Information Form',
  steps: [
    {
      id: 'personalInfo',
      title: 'Personal Information',
      description: 'Please provide your basic personal information.',
      fields: [
        { name: 'firstName', label: 'First Name', type: 'text', required: true, errorMessage: 'First name is required' },
        { name: 'lastName', label: 'Last Name', type: 'text', required: true, errorMessage: 'Last name is required' },
        { name: 'email', label: 'Email', type: 'email', required: true, errorMessage: 'Valid email is required' }
      ]
    }
  ],
  submitButtonText: 'Submit Basic Info',
  cancelButtonText: 'Cancel'
};