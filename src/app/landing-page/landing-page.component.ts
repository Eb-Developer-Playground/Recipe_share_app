import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatMenuModule,MatToolbarModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
