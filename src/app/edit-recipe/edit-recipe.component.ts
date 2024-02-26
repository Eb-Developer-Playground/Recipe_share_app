import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RecipesService } from '../recipes.service';
import { RecipesData } from '../sign-up/recipes';
import { MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-recipe',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,
    MatFormFieldModule, MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    CommonModule,
     MatIconModule],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.scss'
})
export class EditRecipeComponent {
Edit() {
throw new Error('Method not implemented.');
}
close() {
throw new Error('Method not implemented.');
}
editrecipeForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private recipeservice: RecipesService, private router:Router) { }
  //category optons 
Categorys = [
  {value: 'BreakFast-0', viewValue: 'BreakFast'},
  {value: 'Lunch-1', viewValue: 'Lunch'},
  {value: 'Dinner-2', viewValue: 'Dinner'},
  {value: 'Snack-3', viewValue: 'Snack'}
];
}
