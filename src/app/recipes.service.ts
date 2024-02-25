import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

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
//search recipes 
searchRecipes(searchTerm: string): Observable<any> {
  console.log(searchTerm);
  return this.http.get<any>(`${this.apiUrl}/search?query=${searchTerm}`);
}
}
