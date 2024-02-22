import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopNewrecipePageComponent } from './pop-newrecipe-page.component';

describe('PopNewrecipePageComponent', () => {
  let component: PopNewrecipePageComponent;
  let fixture: ComponentFixture<PopNewrecipePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopNewrecipePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopNewrecipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
