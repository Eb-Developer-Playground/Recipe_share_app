import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,Validators, FormControl, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        NgIf
      ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);

  options: FormGroup = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder) {}
  // Get the labels on focus of the input field
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
  // Email validations
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid email address';
    }  
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}