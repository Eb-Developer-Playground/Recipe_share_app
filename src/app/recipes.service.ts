import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable,map  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private apiUrl = 'http://localhost:3000/recipes/';
  
  constructor(private http: HttpClient) {}
  ///get recipes from the server 
  getData(recipeId?: string): Observable<any> {
    if (recipeId) {
      // Fetch single recipe during view recipe
      return this.http.get<any>(`${this.apiUrl}${recipeId}`);
    } else {
      // Fetch all recipes
      return this.http.get<any>(this.apiUrl);
    }
  }
//create Recipes in my recipes page  

createRecipes(FormData:any): Observable<any>{
  console.log(FormData);
  return this.http.post<any>(this.apiUrl, FormData);
}
  // Edit a recipe
  editRecipe(recipeId: string, updatedRecipeData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${recipeId}`, updatedRecipeData);
  }
  // Delete a recipe
  deleteRecipe(recipeId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${recipeId}`);
  }

    // Like a recipe
    likeRecipe(recipeId: string): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}${recipeId}/like`, {});
    }
//search recipes 
getrecipes(): Observable<any>{
 
  let url="http://localhost:3000/recipes/";
  // console.log(model.searchBy);
  return this.http.get<any[]>(`${url}`);
}
searchRecipes(model: any): Observable<any> {
 
  let url="http://localhost:3000/recipes/";
  // console.log(model.searchBy);
  let title= model.searchBy;
  let value=model.searchTerm;
  return this.getrecipes().pipe(
    map(data => data.filter((item: { title: string; value: string; }) =>
      item.value
    )))
 // return this.http.get<any[]>(`${url}`);

}
}
