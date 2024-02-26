import { Component, OnInit } from '@angular/core';
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
import { Router,ActivatedRoute } from '@angular/router';


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
export class EditRecipeComponent implements OnInit {
  recipeId: any;
  constructor(private formBuilder: FormBuilder, 
    private recipeservice: RecipesService,
    private route: ActivatedRoute,
    private router:Router) { }
  //category optons 
Categorys = [
  {value: 'BreakFast-0', viewValue: 'BreakFast'},
  {value: 'Lunch-1', viewValue: 'Lunch'},
  {value: 'Dinner-2', viewValue: 'Dinner'},
  {value: 'Snack-3', viewValue: 'Snack'}
];
//form initialization 
  editrecipeForm!:FormGroup;
ngOnInit(): void {
  this.editrecipeForm = this.formBuilder.group({
    title: [''],
    category: [''],
    ingredients: [''],
    instruction: [''],
    recipimgurl: ['']
  });
  // Retrieve recipe ID from route parameters
  this.route.params.subscribe(params => {
    this.recipeId = params['id'];
    // Fetch recipe data using this.recipeId and populate form fields
    this.fetchRecipeData(this.recipeId);
  });
}

fetchRecipeData(recipeId: any) {
 //fetch recipe data from service based on recipeId
  this.recipeservice.getData(recipeId).subscribe(recipe => {
    // Populate form fields with fetched data
    this.editrecipeForm.patchValue({
      title: recipe.title,
      category: recipe.category,
      ingredients: recipe.ingredients,
      instruction: recipe.instruction,
      recipimgurl: recipe.recipimgurl
    });
  });
}


  
Edit() {
  
  }
  close() {
  throw new Error('Method not implemented.');
  }
}
