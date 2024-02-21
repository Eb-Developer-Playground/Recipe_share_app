import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-popuppage',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatInputModule, MatFormFieldModule,MatCardModule],
  templateUrl: './popuppage.component.html',
  styleUrl: './popuppage.component.scss'
})
export class PopuppageComponent implements OnInit {
  constructor(private authService: AuthenticationService, private userService: UserService, private formBuilder: FormBuilder,public dialogRef: MatDialogRef<PopuppageComponent>) { }
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  editForm: FormGroup = this.formBuilder.group({
    floatLabel: this.floatLabelControl

  })
  //form values initializiation
 email = new FormControl('', [ Validators.email]);
 username = new FormControl('');
 address = new FormControl('');
 telephone = new FormControl('');
 restaurant = new FormControl('');
 profileurl = new FormControl('');
 facebook= new FormControl('');
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
     // Implement logic to save profile changes
    // Close the dialog

 
    save() {
      if (this.editForm.valid) {
        const userId = this.authService.getUserId();
        console.log(userId);
        const userData = {
          username: this.editForm.value.username,
          email: this.editForm.value.email,
          profile: {
            telephone: this.editForm.value.telephone,
            restaurant: this.editForm.value.restaurant,
            profileurl: this.editForm.value.profileurl,
            facebook: this.editForm.value.facebook
          }
        };
        // Call the service method to update the user data in the database
       this.userService.updateUserData(userId, userData).subscribe(
          (res) => {
            console.log(userId);
            console.log(res);
            // Close the dialog
            this.dialogRef.close();
          },
          (error) => {
            console.error(error);
            // Handle error if needed
          }
        );
      }
    
    
  }
  //close without saving 
  close(): void {
    this.dialogRef.close();
  }
}
