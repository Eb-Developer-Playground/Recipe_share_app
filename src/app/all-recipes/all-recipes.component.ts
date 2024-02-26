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

@Component({
  selector: 'app-all-recipes',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, NavigationComponent, MatIconModule, MatCardModule,MatToolbarModule, MatMenuModule,MatInputModule, RouterModule],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.scss'
})
export class AllRecipesComponent implements OnInit {
recipeData: any;
  constructor(private router :Router, 
    private RecipesService: RecipesService,
    private formbuilder: FormBuilder){}
  search!: FormGroup;
  filter!: FormGroup;
  ngOnInit(): void {
    
    this.search = this.formbuilder.group({
      search: ['']
    })
    this.filter = this.formbuilder.group({
      filter: ['']
    })
      this.RecipesService.getData().subscribe((data: any) => {
        console.log(data);
        this.recipeData = data;
      }, error=>{
        console.error('Error fetching data:', error); 
      });
  }
  Logout(){
    this.router.navigate(['/LandingPage']);
  }
  ViewRecipe(recipeId: any){
    console.log('viewed recipe with ID:', recipeId);
    this.router.navigate(['/viewRecipes', recipeId]);
  }
}
