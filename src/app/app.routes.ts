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
import { AuthGuard } from './auth.guard';
export const routes: Routes = [
    {path:'' ,component: LandingPageComponent},
    {path:'LandingPage', component: LandingPageComponent, pathMatch: 'full'},
    {path:'signup', component: SignUpComponent}, 
    {path:'login', component: LoginComponent},
    {path:'myprofile', component: MyProfileComponent,canActivate: [AuthGuard]},
    {path:'myRecipes', component: MyRecipeComponent, canActivate: [AuthGuard]},
    {path:'allRecipes', component: AllRecipesComponent},
    {path:'viewRecipes/:id', component: ViewRecipesComponent},
    {path:'newrecipe', component: AddRecipeComponent, canActivate: [AuthGuard]},
    {path:'editrecipe/:id', component: EditRecipeComponent, canActivate: [AuthGuard]}
    
];
