import { Component } from '@angular/core';
import { FormConfig } from './step-form-kit/models/form-config.model';
import { basicFormConfig } from './form-configs/basic-form.config';
import { advancedFormConfig } from './form-configs/advanced-form.config';
import { securityFormConfig } from './form-configs/security-form.config';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>StepFormKit Demo</h1>
      <nav>
  <button 
    (click)="setFormConfig('basic')" 
    [class.active]="currentForm === 'basic'" 
    [ngStyle]="{ color: currentForm === 'basic' ? 'white' : 'black' }">
    Basic Form
  </button>
  <button 
    (click)="setFormConfig('advanced')" 
    [class.active]="currentForm === 'advanced'" 
    [ngStyle]="{ color: currentForm === 'advanced' ? 'white' : 'black' }">
    Advanced Form
  </button>
  <button 
    (click)="setFormConfig('security')" 
    [class.active]="currentForm === 'security'" 
    [ngStyle]="{ color: currentForm === 'security' ? 'white' : 'black' }">
    Security Form
  </button>
</nav>
      <app-step-form [formConfig]="formConfig" [initialData]="currentFormData"></app-step-form>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
    nav {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
    button {
      margin: 0 10px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      background-color: #f0f0f0;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #e0e0e0;
    }
    button.active {
      background-color: #007bff;
      color: white;
    }
  `]
})
export class AppComponent {
  formConfig: FormConfig = basicFormConfig;
  currentForm: string = 'basic';
  currentFormData: any;

  private basicFormData = {
    personalInfo: {
      firstName: 'Pushpendra',
      lastName: 'Singh',
      email: 'Pushpendra@example.com'
    }
  };

  private advancedFormData = {
    personalInfo: {
      firstName: 'Pushpendra',
      lastName: 'Singh',
      email: 'Pushpendra@example.com',
      phone: '123-456-7890',
      birthDate: '2000-01-01'
    },
    addressInfo: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zipCode: '12345',
      country: 'us'
    },
    preferences: {
      newsletter: true,
      theme: 'light',
      language: 'en'
    }
  };

  private securityFormData = {
    personalInfo: {
      firstName: 'Pushpendra',
      lastName: 'Singh',
      employeeId: 'EMP123',
      email: 'Pushpendra@companysecurity.com'
    },
    securityCredentials: {
      clearanceLevel: 'secret',
      clearanceNumber: 'SC123456',
      expirationDate: '2025-12-31'
    },
    specialization: {
      primaryRole: 'networkSecurity',
      certifications: ['cissp', 'ceh'],
      yearsOfExperience: 5
    }
  };

  setFormConfig(formType: string) {
    this.currentForm = formType;
    switch (formType) {
      case 'advanced':
        this.formConfig = advancedFormConfig;
        this.currentFormData = this.advancedFormData;
        break;
      case 'security':
        this.formConfig = securityFormConfig;
        this.currentFormData = this.securityFormData;
        break;
      default:
        this.formConfig = basicFormConfig;
        this.currentFormData = this.basicFormData;
    }
  }
}