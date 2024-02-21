import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-my-recipe',
  standalone: true,
  imports: [RouterModule,MatMenuModule,MatToolbarModule,MatCardModule],
  templateUrl: './my-recipe.component.html',
  styleUrl: './my-recipe.component.scss'
})
export class MyRecipeComponent {
  Logout(){}
}
