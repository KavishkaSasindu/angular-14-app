import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterMainSliderComponent } from './starter-main-slider.component';

describe('StarterMainSliderComponent', () => {
  let component: StarterMainSliderComponent;
  let fixture: ComponentFixture<StarterMainSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterMainSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterMainSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
