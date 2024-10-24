import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepFormComponent } from './components/step-form/step-form.component';
import { ApiService } from './services/api.service';
import { FormStateService } from './services/form-state.service';

@NgModule({
  declarations: [StepFormComponent],
  imports: [CommonModule, ReactiveFormsModule, BrowserAnimationsModule],
  exports: [StepFormComponent],
  providers: [ApiService, FormStateService]
})
export class StepFormKitModule { }