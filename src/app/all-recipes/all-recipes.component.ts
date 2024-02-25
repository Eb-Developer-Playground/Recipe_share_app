import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-all-recipes',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, MatCardModule,MatToolbarModule, MatMenuModule,MatInputModule, RouterModule],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.scss'
})
export class AllRecipesComponent {
  constructor(private router :Router, private formbuilder: FormBuilder){}
  search!: FormGroup;
  filter!: FormGroup;
  Logout(){

  }
}
