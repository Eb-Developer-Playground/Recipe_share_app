import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, MatMenuModule,MatToolbarModule, MatCardModule,MatIconModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent  {
 constructor (private router :Router){}
SignUp() {
  this.router.navigate(['/signup']);
}
Login() {
  this.router.navigate(['/login']);
}


}
