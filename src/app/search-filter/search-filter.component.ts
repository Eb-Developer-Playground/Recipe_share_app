import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [MatFormFieldModule,MatSelectModule,MatOptionModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss'
})
export class SearchFilterComponent {

  searchForm: FormGroup;
  searcheData:any[]=[];
  constructor(private formBuilder: FormBuilder, private recipeService: RecipesService) {
    this.searchForm = this.formBuilder.group({
      searching: [''] ,
      searchBy: ['title'] 
    });
  }
  reset() {
    this.searcheData = [];
    this.recipeService.updateSearchData(this.searcheData);
    this.recipeService.setShowSearchResults(false); 
    }

  onSearch(): void {

    let model= {
       searchTerm : this.searchForm?.get('searching')?.value,
       searchBy : this.searchForm?.get('searchBy')?.value
    }
    this.recipeService.searchRecipes(model).subscribe((data) => {
     console.log("all recipes",data); 
     this.searcheData=[...data];
     console.log("arraydata", this.searcheData)    
     this.recipeService.updateSearchData(this.searcheData);
     console.log("data to be passed as searched", this.searcheData);
     this.recipeService.setShowSearchResults(true); 
    });
  }
}
