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
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { delay, takeUntil } from 'rxjs/operators';
import {  Subject } from 'rxjs';

@Component({
  selector: 'app-my-recipe',
  standalone: true,
  imports: [CommonModule,MatSelectModule,
    NavigationComponent, ReactiveFormsModule,
    RouterModule,MatMenuModule,MatToolbarModule,
    MatCardModule,MatFormFieldModule,
    SearchFilterComponent, MatIconModule],
  templateUrl: './my-recipe.component.html',
  styleUrl: './my-recipe.component.scss'
})
export class MyRecipeComponent implements OnInit {
 
  search!: FormGroup;
  filter!: FormGroup;
recipeData: any;
filteredRecipes: any;
SearchedRecipes: any;
//category optons 
Categorys = [
  {value: 'BreakFast', viewValue: 'BreakFast'},
  {value: 'Lunch', viewValue: 'Lunch'},
  {value: 'Dinner', viewValue: 'Dinner'},
  {value: 'Snack', viewValue: 'Snack'}
];
  //boolen to determine when o render searched data
  showSearchResults: boolean = false;

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
  private destroy$: Subject<void> = new Subject<void>();
  ngOnInit(): void {
    const userId = localStorage.getItem('loggedInUserId') ?? '';
  
    this.RecipesService.getmyData(userId).pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
      console.log(data);
      this.recipeData = data;
      this.cdr.detectChanges();
      this.showSearchResults = this.SearchedRecipes && this.SearchedRecipes.length > 0;
      // this.showSearchResultsSubject.next(false);
    }, error => {
      console.error('Error fetching data:', error);
    });
  
    // searched data from the service
    this.RecipesService.searchData$.pipe(delay(0)).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      console.log('Received data from search:', data);
      // pick only data for the logged-in user
      this.SearchedRecipes = data.filter((recipe: any) => recipe.userId === userId);
      this.showSearchResults = this.SearchedRecipes && this.SearchedRecipes.length > 0;
      //this.showSearchResultsSubject.next(true);
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  //sort function 
  // filterRecipesByCategory(): void {
  //   const selectedCategory = this.filter.value.filter;
  //   if (selectedCategory) {
  //     this.filteredRecipes = this.recipeData.filter((recipe: { category: any; }) => recipe.category === selectedCategory);
  //   } else {
  //     this.filteredRecipes = this.recipeData;
  //   }
  // }


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
