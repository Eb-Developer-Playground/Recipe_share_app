import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { PopNewrecipePageComponent } from '../pop-newrecipe-page/pop-newrecipe-page.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-my-recipe',
  standalone: true,
  imports: [RouterModule,MatMenuModule,MatToolbarModule,MatCardModule,MatFormFieldModule,MatIconModule],
  templateUrl: './my-recipe.component.html',
  styleUrl: './my-recipe.component.scss'
})
export class MyRecipeComponent implements OnInit {
  constructor( private dialog: MatDialog, private userService: UserService, private router: Router){}
  //fetch My recipes from the server when user visit the page 
  //fetch data from the server 
  ngOnInit(): void {
  }
  //logout function 
  Logout(){
    this.router.navigate(['/LandingPage']);
  }
  //add new recipe by pop up page 
  newRecipe(){
    const dialogRef = this.dialog.open(PopNewrecipePageComponent, {
      width: '550px', 
       // Prevent closing by clicking outside or pressing ESC
      disableClose: true
    }); 
  }
}
