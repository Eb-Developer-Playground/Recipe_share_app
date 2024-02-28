import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recommended-recipe',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule,CommonModule ],
  templateUrl: './recommended-recipe.component.html',
  styleUrl: './recommended-recipe.component.scss'
})
export class RecommendedRecipeComponent {
  recipes: any[] = [];
  constructor(private recipesservice: RecipesService, private router :Router){}
  ngOnInit(): void {
    this.recipesservice.getData().subscribe((data: any) => {
      console.log(data);
      this.recipes = data;
      console.log(this.recipes)
    }, error=>{
      console.error('Error fetching data:', error); 
    });
   }
   viewRecipeDetails(recipeId: any) {
    this.router.navigate(['/viewRecipes', recipeId]);
    }
}
