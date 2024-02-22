import { Component } from '@angular/core';
import { FormBuilder,Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-pop-newrecipe-page',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatInputModule, MatFormFieldModule,MatCardModule],
  templateUrl: './pop-newrecipe-page.component.html',
  styleUrl: './pop-newrecipe-page.component.scss'
})
export class PopNewrecipePageComponent {
  newRecipeForm!: FormGroup;
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Initialize your form controls here
    this.newRecipeForm = this.formBuilder.group({
      Title: ['', Validators.required],
      Category: ['', Validators.required],
      ingredients: ['', Validators.required],
      instruction: ['', Validators.required],
      recipimgurl: ['', Validators.required],
    });
  }
  Add(){}
  close(){}
}
