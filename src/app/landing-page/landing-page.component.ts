import { Component, OnInit, ViewChild,Renderer2, ElementRef, OnDestroy  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { RecommendedRecipeComponent } from '../recommended-recipe/recommended-recipe.component';
import { TestimonialsService } from '../testimonials.service';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule,RecommendedRecipeComponent, MatMenuModule,MatToolbarModule, MatCardModule,MatIconModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent  {
  testimonies: any[] = [];
  currentSlide = 0;
  private sliderSubscription: Subscription | undefined;
  constructor(private router: Router, private testimonials: TestimonialsService) {}
  
 
  SignUp(): void {
    this.router.navigate(['/signup']);
  }

  Login(): void {
    this.router.navigate(['/login']);
  }
}
