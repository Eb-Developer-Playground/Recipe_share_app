import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule, MatMenuModule,MatToolbarModule, MatCardModule,MatIconModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {

}
