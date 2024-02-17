import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';
import { MyRecipeComponent } from './my-recipe/my-recipe.component';

export const routes: Routes = [
    {path:'' ,component: LandingPageComponent},
    {path:'LandingPage', component: LandingPageComponent, pathMatch: 'full'},
    {path:'signup', component: SignUpComponent, pathMatch: 'full'}, 
    {path:'login', component: LoginComponent, pathMatch: 'full'},
    {path:'myprofile', component: MyProfileComponent, pathMatch: 'full'},
    {path:'myRecipes', component: MyRecipeComponent,pathMatch: 'full'},
    {path:'viewRecipes', component: ViewRecipesComponent, pathMatch: 'full'}
];
