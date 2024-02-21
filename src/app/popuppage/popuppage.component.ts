import { Component, Inject, OnInit } from '@angular/core';
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
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  editForm!: FormGroup;
  //jwtservice = new Inject(JwtHelperService)

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PopuppageComponent>
  ) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      username: [''],
      email: ['', Validators.email],
      address: [''],
      telephone: [''],
      restaurant: [''],
      profileurl: [''],
      facebook: ['']
    });
     // Fetch user data and populate the form fields
     const userId = localStorage.getItem('loggedInUserId');
     if (userId) {
       this.userService.getData(userId).subscribe(userData => {
         // Set form values with fetched data
         this.editForm.patchValue({
           username: userData.username,
           email: userData?.email,
           address: userData?.profile?.address,
           telephone: userData?.profile?.telephone,
           restaurant: userData?.profile?.restaurant,
           profileurl: userData?.profile?.profileurl,
           facebook: userData?.profile?.facebook
         });
       });
     }
   }
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  getErrorMessage() {
    const email = this.editForm.get('email');
    return email?.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    // Logic for form submission
  }

  save() {
    if (this.editForm.valid) {
      const userId=localStorage.getItem('loggedInUserId');
      console.log(userId);
      const userData = {
        username: this.editForm.value.username,
        email: this.editForm.value.email,
        profile: {
          telephone: this.editForm.value.telephone,
          restaurant: this.editForm.value.restaurant,
          address: this.editForm.value.address,
          profileurl: this.editForm.value.profileurl,
          facebook: this.editForm.value.facebook
        }
      };
      console.log(userData);
      this.userService.updateUserData(userId, userData).subscribe(
        (res) => {
          console.log(res);
          this.dialogRef.close();
          //reload the page to update the data 
          window.location.reload();
        },
        (error) => {
          console.error(error);
          // Handle error if needed
        }
      );
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
