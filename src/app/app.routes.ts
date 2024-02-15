import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';

export const routes: Routes = [
    {path:'' ,component: LoginComponent},
    {path:'LandingPage', component: LandingPageComponent, pathMatch: 'full'},
    {path:'signup', component: SignUpComponent, pathMatch: 'full'}, 
    {path:'login', component: LoginComponent, pathMatch: 'full'},
    {path:'myprofile', component: MyProfileComponent, pathMatch: 'full'},
    {path:'myRecipes', component: MyRecipesComponent,pathMatch: 'full'},
    {path:'viewRecipes', component: ViewRecipeComponent, pathMatch: 'full'}
];
