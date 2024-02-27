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
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationComponent } from '../navigation/navigation.component';
import { MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-my-recipe',
  standalone: true,
  imports: [CommonModule,MatSelectModule,
    NavigationComponent, ReactiveFormsModule,
    RouterModule,MatMenuModule,MatToolbarModule,
    MatCardModule,MatFormFieldModule,MatIconModule],
  templateUrl: './my-recipe.component.html',
  styleUrl: './my-recipe.component.scss'
})
export class MyRecipeComponent implements OnInit {
 
  search!: FormGroup;
  filter!: FormGroup;
recipeData: any;
filteredRecipes: any;
//category optons 
Categorys = [
  {value: 'BreakFast', viewValue: 'BreakFast'},
  {value: 'Lunch', viewValue: 'Lunch'},
  {value: 'Dinner', viewValue: 'Dinner'},
  {value: 'Snack', viewValue: 'Snack'}
];
 
  constructor(private formBuilder:FormBuilder,
    private RecipesService: RecipesService, 
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private router: Router){}

    openSnackBar(message: string, panelClass: string): void {
      this.snackBar.open(message, 'Close', {
        duration: 1000, 
        panelClass: [panelClass],
      });
    }
    
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
        this.filteredRecipes = data;
        this.cdr.detectChanges();
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
  //sort function 
  filterRecipesByCategory(): void {
    const selectedCategory = this.filter.value.filter;
    if (selectedCategory) {
      this.filteredRecipes = this.recipeData.filter((recipe: { category: any; }) => recipe.category === selectedCategory);
    } else {
      this.filteredRecipes = this.recipeData;
    }
  }
  //like recipe
  like(recipeId: any){
    console.log('Liked recipe with ID:', recipeId);
  }
  edit(recipeId: any){
    console.log('editted recipe with ID:', recipeId);
    this.router.navigate(['/editrecipe', recipeId]);
  }
  deleteRe(recipeId: any){
    console.log('deleted recipe with ID:', recipeId);
    this.RecipesService.deleteRecipe(recipeId).subscribe(() => {
      console.log('Deleted recipe with ID:', recipeId);     
      this.openSnackBar('Recipe deleted successfully', 'success-notification');
      // Refresh recipe data after deleting 
      setTimeout(() => {        
        this.router.navigate(['/myRecipes']);
      }, 1000);
    },
    (error) => {
      // Error while deleting recipe
      console.error('Error deleting recipe:', error);
      this.openSnackBar('Error deleting recipe', 'error-notification');
    });
    this.router.navigate(['/myRecipes']);
}
  ViewRecipe(recipeId: any){
    console.log('viewed recipe with ID:', recipeId);
    this.router.navigate(['/viewRecipes', recipeId]);
  }
 
  //add new recipe by pop up page 
  addRecipe(){
    this.router.navigate(['/newrecipe'])
 }
}
