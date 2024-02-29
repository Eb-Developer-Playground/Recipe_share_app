import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NavigationComponent } from '../navigation/navigation.component';
import { RecipesService } from '../recipes.service';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { delay, takeUntil } from 'rxjs/operators';
import {  Subject } from 'rxjs';
@Component({
  selector: 'app-all-recipes',
  standalone: true,
  imports: [SearchFilterComponent, ReactiveFormsModule,CommonModule, NavigationComponent, MatIconModule, MatCardModule,MatToolbarModule, MatMenuModule,MatInputModule, RouterModule],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.scss'
})
export class AllRecipesComponent implements OnInit {
recipeData: any;
SearchedRecipes: any;
  //boolen to determine when o render searched data
  showSearchResults: boolean = false;
  constructor(private router :Router, 
    private RecipesService: RecipesService,
    private formbuilder: FormBuilder){}
  search!: FormGroup;
  filter!: FormGroup;
  ngOnInit(): void {
    this.RecipesService.getData().pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
      console.log(data);
      this.recipeData = data;
      //this.cdr.detectChanges();
      this.showSearchResults = this.SearchedRecipes && this.SearchedRecipes.length > 0;
      // this.showSearchResultsSubject.next(false);
    }, error => {
      console.error('Error fetching data:', error);
    });
  
    // searched data from the service
    this.RecipesService.searchData$.pipe(delay(0)).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      console.log('Received data from search:', data);
      // pick only data for the logged-in user
      this.SearchedRecipes = data;
      this.showSearchResults = this.SearchedRecipes && this.SearchedRecipes.length > 0;
      //this.showSearchResultsSubject.next(true);
    });
  }

  private destroy$: Subject<void> = new Subject<void>();
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  Logout(){
    this.router.navigate(['/LandingPage']);
  }
  ViewRecipe(recipeId: any){
    console.log('viewed recipe with ID:', recipeId);
    this.router.navigate(['/viewRecipes', recipeId]);
  }
}
