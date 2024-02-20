import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopuppageComponent } from './popuppage.component';

describe('PopuppageComponent', () => {
  let component: PopuppageComponent;
  let fixture: ComponentFixture<PopuppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopuppageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopuppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
