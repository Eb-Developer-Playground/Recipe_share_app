import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NavigationComponent } from '../navigation/navigation.component';
@Component({
  selector: 'app-view-recipes',
  standalone: true,
  imports: [CommonModule, NavigationComponent, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './view-recipes.component.html',
  styleUrl: './view-recipes.component.scss'
})
export class ViewRecipesComponent implements OnInit{
  recipeId: any;
  recipe: any;
constructor(private route: ActivatedRoute,
  private recipeservice : RecipesService,
 private router: Router){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipeId = params['id'];
      // Fetch recipe data using this.recipeId and populate form fields
      this.fetchRecipeData(this.recipeId);
    });
  }
  fetchRecipeData(recipeId: any) {
    //fetch recipe data from service based on recipeId
     this.recipeservice.getData(recipeId).subscribe(recipe => {
      console.log(recipe)
      this.recipe = recipe;
    })
  }
  cancel(){
    this.router.navigate(['/myRecipes'])
  }
}
