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
  selector: 'app-add-recipe',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,
    MatFormFieldModule, MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    CommonModule,
     MatIconModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})
export class AddRecipeComponent {
  constructor(private formBuilder: FormBuilder, private recipeservice: RecipesService, private router:Router) { }

  recipesinfo: RecipesData []=[];
  recipes: any={
      title: "",
      category: "",
      ingredients: "",
      instruction: "",
      recipeUrl: ""
}
//category optons 
Categorys = [
  {value: 'BreakFast', viewValue: 'BreakFast'},
  {value: 'Lunch', viewValue: 'Lunch'},
  {value: 'Dinner', viewValue: 'Dinner'},
  {value: 'Snack', viewValue: 'Snack'}
];
 
  //handle form control change
  recipeForm=new FormGroup({
    title : new FormControl('', Validators.required),
    category : new FormControl('', Validators.required),
    ingredients : new FormControl('', Validators.required),
    instruction : new FormControl('', Validators.required),
    recipimgurl : new FormControl('', Validators.required)
  })
  formZ!: FormGroup
 ngOnInit(): void {
  this.formZ = this.formBuilder.group({
    name : ['']
  })
     
 }
  //submit created recipe
  Add(){
    if (this.recipeForm.valid) {
      const getTitle = this.recipeForm.get('title');
      const getCategory = this.recipeForm.get('category');
      const getIngredients = this.recipeForm.get('ingredients');
      const getInstruction = this.recipeForm.get('instruction');
      const getRecipeUrl = this.recipeForm.get('recipimgurl');
        if (getTitle && getCategory && getIngredients && getInstruction && getRecipeUrl){
          const title=getTitle.value;
          const ingredients=getIngredients.value;
          const category=getCategory.value;
          const instruction=getInstruction.value;
          const recipeUrl=getRecipeUrl.value;
          const formData = {
            title: title,
            category: category,
            ingredients: ingredients,
            instruction: instruction,
            recipeUrl: recipeUrl
          }
          console.log("formdata", formData)
          //push data to the server 
          this.recipeservice.createRecipes(formData).subscribe(
            response => {
              console.log(response)
              this.recipesinfo.push({
                  title: response.title,
                  category: response.category,
                  ingredients: response.ingredients,
                  instruction: response.instruction,
                  recipeUrl: response.recipeUrl
              })
              this.router.navigate(['/myRecipes'])
            })
        }
    }else{
      console.log("invalid")
    }

  }
  close() {
    this.router.navigate(['/myRecipes'])
  }

}
