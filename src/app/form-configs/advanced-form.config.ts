import { FormConfig } from '../step-form-kit/models/form-config.model';

export const advancedFormConfig: FormConfig = {
  id: 'advancedForm',
  title: 'Advanced User Registration',
  steps: [
    {
      id: 'personalInfo',
      title: 'Personal Information',
      description: 'Please provide your detailed personal information.',
      fields: [
        { name: 'firstName', label: 'First Name', type: 'text', required: true, errorMessage: 'First name is required' },
        { name: 'lastName', label: 'Last Name', type: 'text', required: true, errorMessage: 'Last name is required' },
        { name: 'email', label: 'Email', type: 'email', required: true, errorMessage: 'Valid email is required' },
        { name: 'phone', label: 'Phone Number', type: 'text', required: false, errorMessage: 'Invalid phone number' },
        { name: 'birthDate', label: 'Date of Birth', type: 'date', required: true, errorMessage: 'Date of birth is required' }
      ]
    },
    {
      id: 'addressInfo',
      title: 'Address Information',
      description: 'Please provide your current address.',
      fields: [
        { name: 'street', label: 'Street Address', type: 'text', required: true, errorMessage: 'Street address is required' },
        { name: 'city', label: 'City', type: 'text', required: true, errorMessage: 'City is required' },
        { name: 'state', label: 'State/Province', type: 'text', required: true, errorMessage: 'State/Province is required' },
        { name: 'zipCode', label: 'Zip/Postal Code', type: 'text', required: true, errorMessage: 'Zip/Postal code is required' },
        { name: 'country', label: 'Country', type: 'select', required: true, errorMessage: 'Country is required', options: [
          { value: 'us', label: 'United States' },
          { value: 'ca', label: 'Canada' },
          { value: 'uk', label: 'United Kingdom' },
          { value: 'au', label: 'Australia' }
        ]}
      ]
    },
    {
      id: 'preferences',
      title: 'User Preferences',
      description: 'Set your account preferences.',
      fields: [
        { name: 'newsletter', label: 'Subscribe to newsletter', type: 'checkbox', required: false, errorMessage: '' }, // Added empty errorMessage
        { name: 'theme', label: 'Preferred theme', type: 'radio', required: true, errorMessage: 'Please select a theme', options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' },
          { value: 'system', label: 'System Default' }
        ]},
        { name: 'language', label: 'Preferred Language', type: 'select', required: true, errorMessage: 'Please select a language', options: [
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Spanish' },
          { value: 'fr', label: 'French' },
          { value: 'de', label: 'German' }
        ]}
      ]
    }
  ],
  submitButtonText: 'Complete Registration',
  cancelButtonText: 'Cancel'
};