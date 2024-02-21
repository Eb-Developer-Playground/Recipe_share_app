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
      console.log(userData);
      this.userService.updateUserData(userData).subscribe(
        (res) => {
          console.log(res);
          this.dialogRef.close();
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
