import { FormConfig } from '../step-form-kit/models/form-config.model';

export const securityFormConfig: FormConfig = {
  id: 'securityForm',
  title: 'Security Personnel Information Form',
  steps: [
    {
      id: 'personalInfo',
      title: 'Personal Information',
      description: 'Please provide your basic personal information.',
      fields: [
        { name: 'firstName', label: 'First Name', type: 'text', required: true, errorMessage: 'First name is required' },
        { name: 'lastName', label: 'Last Name', type: 'text', required: true, errorMessage: 'Last name is required' },
        { name: 'employeeId', label: 'Employee ID', type: 'text', required: true, errorMessage: 'Employee ID is required' },
        { name: 'email', label: 'Work Email', type: 'email', required: true, errorMessage: 'Valid work email is required' }
      ]
    },
    {
      id: 'securityCredentials',
      title: 'Security Credentials',
      description: 'Provide your security clearance information.',
      fields: [
        { 
          name: 'clearanceLevel', 
          label: 'Security Clearance Level', 
          type: 'select', 
          required: true, 
          errorMessage: 'Security clearance level is required',
          options: [
            { value: 'confidential', label: 'Confidential' },
            { value: 'secret', label: 'Secret' },
            { value: 'topsecret', label: 'Top Secret' },
            { value: 'tssci', label: 'TS/SCI' }
          ]
        },
        { name: 'clearanceNumber', label: 'Clearance Number', type: 'text', required: true, errorMessage: 'Clearance number is required' },
        { name: 'expirationDate', label: 'Clearance Expiration Date', type: 'date', required: true, errorMessage: 'Expiration date is required' }
      ]
    },
    {
      id: 'specialization',
      title: 'Security Specialization',
      description: 'Provide information about your security specialization.',
      fields: [
        { 
          name: 'primaryRole', 
          label: 'Primary Security Role', 
          type: 'select', 
          required: true, 
          errorMessage: 'Primary security role is required',
          options: [
            { value: 'dataProtection', label: 'Data Protection Officer' },
            { value: 'networkSecurity', label: 'Network Security Specialist' },
            { value: 'incidentResponse', label: 'Incident Response Analyst' },
            { value: 'accessControl', label: 'Access Control Manager' },
            { value: 'complianceOfficer', label: 'Compliance Officer' }
          ]
        },
        { 
          name: 'certifications', 
          label: 'Security Certifications', 
          type: 'checkbox', 
          required: false, 
          errorMessage: '',
          options: [
            { value: 'cissp', label: 'CISSP' },
            { value: 'cism', label: 'CISM' },
            { value: 'ceh', label: 'CEH' },
            { value: 'comptia', label: 'CompTIA Security+' },
            { value: 'giac', label: 'GIAC' }
          ]
        },
        { name: 'yearsOfExperience', label: 'Years of Security Experience', type: 'number', required: true, errorMessage: 'Years of experience is required' }
      ]
    }
  ],
  submitButtonText: 'Submit Security Personnel Information',
  cancelButtonText: 'Cancel'
};