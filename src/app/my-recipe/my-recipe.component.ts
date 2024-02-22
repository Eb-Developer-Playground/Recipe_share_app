import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-my-recipe',
  standalone: true,
  imports: [RouterModule,MatMenuModule,MatToolbarModule,MatCardModule,MatFormFieldModule],
  templateUrl: './my-recipe.component.html',
  styleUrl: './my-recipe.component.scss'
})
export class MyRecipeComponent {
  Logout(){}
}
