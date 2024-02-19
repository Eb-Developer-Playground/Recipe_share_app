import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, MatMenuModule,MatToolbarModule, MatCardModule,MatIconModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  showContent = false;

  ngOnInit(): void {
    // Set a timeout to show the content after 3000 milliseconds (3 seconds)
    setTimeout(() => {
      this.showContent = true;
    }, 3000);
  }
}
