import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedRecipeComponent } from './recommended-recipe.component';

describe('RecommendedRecipeComponent', () => {
  let component: RecommendedRecipeComponent;
  let fixture: ComponentFixture<RecommendedRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendedRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
