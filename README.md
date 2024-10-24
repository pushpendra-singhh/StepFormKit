# StepFormKit

StepFormKit is a flexible and reusable Angular package for building complex, multi-step forms with advanced features such as conditional logic, partial editing, and dynamic step management.

## Features

- Multi-step form navigation
- Conditional field display
- Selective field editing
- Dynamic step addition and removal
- Client-side validations with custom rules
- API integration for data fetching and submission
- Responsive design with animations
- Accessibility support

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/step-form-kit.git
   ```

2. Install dependencies:
   ```
   cd step-form-kit
   npm install
   ```

3. Run the development server:
   ```
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

## Architecture

StepFormKit is built using Angular and consists of the following main components:

- `StepFormComponent`: The main component that manages the multi-step form
- `FormStateService`: Manages the form state using RxJS
- `ApiService`: Handles API interactions (mock service in this example)
- `StepConfig` and `FieldConfig` interfaces: Define the structure of form steps and fields

The package uses Angular's reactive forms for form management and validation, and Angular animations for smooth transitions between steps.

## Usage

To use StepFormKit in your Angular application:

1. Import `StepFormKitModule` in your `app.module.ts`:

```typescript
import { StepFormKitModule } from './step-form-kit/step-form-kit.module';

@NgModule({
  imports: [
    // ...
    StepFormKitModule
  ],
  // ...
})
export class AppModule { }
```

2. Use the `app-step-form` component in your template:

```html
<app-step-form [formConfig]="formConfig"></app-step-form>
```

3. Define your form configuration in your component:

```typescript
import { Component } from '@angular/core';
import { FormConfig } from './step-form-kit/models/form-config.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>StepFormKit Demo</h1>
    <app-step-form [formConfig]="formConfig"></app-step-form>
  `
})
export class AppComponent {
  formConfig: FormConfig = {
    id: 'demoForm',
    title: 'Demo Multi-Step Form',
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
      // Add more steps as needed
    ],
    submitButtonText: 'Complete Registration',
    cancelButtonText: 'Cancel'
  };
}
```

## Customization

You can customize the appearance of the form by modifying the `step-form.component.scss` file. The component uses CSS variables for easy theming:

```scss
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
  --light-color: #f8f9fa;
  --dark-color: #343a40;
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.