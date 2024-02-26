import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder,Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RecipesService } from '../recipes.service';
import { RecipesData } from '../sign-up/recipes';
@Component({
  selector: 'app-new-recipe',
  standalone: true,
  imports: [ MatFormFieldModule,MatCardModule, ReactiveFormsModule, MatIconModule, MatInputModule, MatButtonModule],
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.scss'
})
export class NewRecipeComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  //handle form control change
  recipeForm=new FormGroup({
    name : new FormControl('', Validators.required)
  })
  formZ!: FormGroup
 ngOnInit(): void {
  this.formZ = this.formBuilder.group({
    name : ['',]
  })
     
 }
  //submit created recipe
  Add(){
    console.log("method being called------")
    // console
    //event.preventDefault();    
    console.log(this.recipeForm.controls.name);
  }




Close() {

}
}
