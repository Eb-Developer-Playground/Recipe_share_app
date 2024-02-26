import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';


@Component({
  selector: 'app-my-recipe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule,MatMenuModule,MatToolbarModule,MatCardModule,MatFormFieldModule,MatIconModule],
  templateUrl: './my-recipe.component.html',
  styleUrl: './my-recipe.component.scss'
})
export class MyRecipeComponent implements OnInit {
  search!: FormGroup;
  filter!: FormGroup;
recipeData: any;
  constructor(private formBuilder:FormBuilder,
    private RecipesService: RecipesService, 
    private cdr: ChangeDetectorRef,
    private router: Router){}
  //fetch My recipes from the server when user visit the page 
  //fetch data from the server 
  ngOnInit(): void {
    this.search = this.formBuilder.group({
      search: ['']
    })
    this.filter = this.formBuilder.group({
      filter: ['']
    })
      this.RecipesService.getData().subscribe((data: any) => {
        console.log(data);
        this.recipeData = data;
      }, error=>{
        console.error('Error fetching data:', error); 
      });
  }
  //search function 
  searchRecipes() {
    const searchTerm = this.search.value.search;
    this.RecipesService.searchRecipes(searchTerm).subscribe((searchResult) => {
      console.log('Search Result:', searchResult);
    })
  }
  //like recipe
  like(recipeId: any){
    console.log('Liked recipe with ID:', recipeId);
  }
  edit(recipeId: any){
    console.log('editted recipe with ID:', recipeId);
  }
  deleteRe(recipeId: any){
    console.log('deleted recipe with ID:', recipeId);
    this.RecipesService.deleteRecipe(recipeId).subscribe(() => {
      console.log('Deleted recipe with ID:', recipeId);
      // Refresh recipe data after deleting
      this.recipeData();
    });
  }
  ViewRecipe(recipeId: any){
    console.log('viewed recipe with ID:', recipeId);
  }
  //logout function 
  Logout(){
    this.router.navigate(['/LandingPage']);
  }
  //add new recipe by pop up page 
  addRecipe(){
    this.router.navigate(['/newrecipe'])
 }
}
