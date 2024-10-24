import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FormConfig } from '../models/form-config.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  fetchFormConfig(): Observable<FormConfig> {
    // Mock API call to fetch form configuration
    const formConfig: FormConfig = {
      id: 'userRegistration',
      title: 'User Registration Form',
      steps: [
        {
          id: 'personalInfo',
          title: 'Personal Information',
          description: 'Please provide your basic personal information.',
          fields: [
            { name: 'firstName', label: 'First Name', type: 'text', required: true, errorMessage: 'First name is required' },
            { name: 'lastName', label: 'Last Name', type: 'text', required: true, errorMessage: 'Last name is required' },
            { name: 'email', label: 'Email', type: 'email', required: true, errorMessage: 'Valid email is required' },
            { 
              name: 'age', 
              label: 'Age', 
              type: 'number', 
              required: true, 
              errorMessage: 'Age must be between 18 and 100',
              validators: [
                (control) => {
                  const value = control.value;
                  if (value < 18 || value > 100) {
                    return { ageRange: true };
                  }
                  return null;
                }
              ]
            }
          ]
        },
        {
          id: 'addressInfo',
          title: 'Address Information',
          description: 'Please provide your current address.',
          fields: [
            { name: 'street', label: 'Street', type: 'text', required: true, errorMessage: 'Street is required' },
            { name: 'city', label: 'City', type: 'text', required: true, errorMessage: 'City is required' },
            { name: 'zipCode', label: 'Zip Code', type: 'text', required: true, errorMessage: 'Zip code is required' },
            { 
              name: 'country', 
              label: 'Country', 
              type: 'select', 
              required: true, 
              errorMessage: 'Country is required', 
              options: [
                { value: 'usa', label: 'United States' },
                { value: 'canada', label: 'Canada' },
                { value: 'uk', label: 'United Kingdom' }
              ]
            }
          ]
        },
        {
          id: 'preferences',
          title: 'Preferences',
          description: 'Set your account preferences.',
          fields: [
            { name: 'newsletter', label: 'Subscribe to newsletter', type: 'checkbox', required: false, errorMessage: '' },
            { 
              name: 'theme', 
              label: 'Preferred theme', 
              type: 'radio', 
              required: true, 
              errorMessage: 'Please select a theme', 
              options: [
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' }
              ]
            }
          ],
          condition: (formValue) => formValue.personalInfo && formValue.personalInfo.age >= 18
        }
      ],
      submitButtonText: 'Complete Registration',
      cancelButtonText: 'Cancel'
    };
    return of(formConfig).pipe(delay(500));
  }

  fetchFormData(): Observable<any> {
    // Mock API call to fetch initial form data
    const formData = {
      personalInfo: {
        firstName: 'Pushpendra',
        lastName: 'Singh',
        email: 'Pushpendra@example.com',
        age: 30
      },
      addressInfo: {
        street: '123 Main St',
        city: 'Anytown',
        zipCode: '12345',
        country: 'usa'
      },
      preferences: {
        newsletter: true,
        theme: 'light'
      }
    };
    return of(formData).pipe(delay(1000));
  }

  submitFormData(data: any): Observable<any> {
    // Mock API call to submit form data
    console.log('Submitting data:', data);
    return of({ success: true, message: 'Form submitted successfully' }).pipe(delay(1500));
  }
}