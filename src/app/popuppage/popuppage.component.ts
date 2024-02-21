import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-popuppage',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatInputModule, MatFormFieldModule,MatCardModule],
  templateUrl: './popuppage.component.html',
  styleUrl: './popuppage.component.scss'
})
export class PopuppageComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialogRef<PopuppageComponent>) { }
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  editForm: FormGroup = this.formBuilder.group({
    floatLabel: this.floatLabelControl

  })
  //form values initializiation
 email = new FormControl('', [Validators.required, Validators.email]);
 username = new FormControl('');
  // Get the labels on focus of the input field
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid email address';
    }   
    return this.email.hasError('email') ? 'Not a valid email' : '';

  }
  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      username: [''],
      // Add other form controls here
    });
  }
  onSubmit(){

  }
  save() {
    // Implement logic to save profile changes
    // Close the dialog
  }
  //close without saving 
  close(): void {
    this.dialogRef.close();
  }
}
