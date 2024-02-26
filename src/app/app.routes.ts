import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';
import { MyRecipeComponent } from './my-recipe/my-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

export const routes: Routes = [
    {path:'' ,component: LandingPageComponent},
    {path:'LandingPage', component: LandingPageComponent, pathMatch: 'full'},
    {path:'signup', component: SignUpComponent, pathMatch: 'full'}, 
    {path:'login', component: LoginComponent, pathMatch: 'full'},
    {path:'myprofile', component: MyProfileComponent, pathMatch: 'full'},
    {path:'myRecipes', component: MyRecipeComponent,pathMatch: 'full'},
    {path:'allRecipes', component: AllRecipesComponent, pathMatch: 'full'},
    {path:'viewRecipes/:id', component: ViewRecipesComponent, pathMatch: 'full'},
    {path:'newrecipe', component: AddRecipeComponent, pathMatch: 'full'},
    {path:'editrecipe/:id', component: EditRecipeComponent, pathMatch: 'full'}
    
];
