import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatStepper,MatStepperModule } from '@angular/material/stepper';
import { TestimonialsService } from '../testimonials.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatStepperModule,MatStepper, MatCardModule, CommonModule ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  @ViewChild('stepper', { static: true }) stepper!: MatStepper;

  reviews: any;
   timer: any;
 

   constructor(private testimonials: TestimonialsService) {}

  ngOnInit(): void {
    this.testimonials.getData().subscribe(data => {
      this.reviews = data; 
      // this.startAutoSlide()   
  });
  }

  startAutoSlide(): void {
    this.timer = setInterval(() => {
      this.slideToNext();
    }, 5000); 
  }

  slideToNext(): void {
    // Check if there is a next step, if not, go to the first step
    if (this.stepper.selectedIndex < this.reviews.length - 1) {
      this.stepper.selectedIndex++;
    } else {
      this.stepper.selectedIndex = 0;
    }
    this.startAutoSlide()
  }

  slideToPrev(): void {
    // Check if there is a previous step, if not, go to the last step
    if (this.stepper.selectedIndex > 0) {
      this.stepper.selectedIndex--;
    } else {
      this.stepper.selectedIndex = this.reviews.length - 1;
    }
    this.startAutoSlide()
  }
}
