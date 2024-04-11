import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterPricingComponent } from './starter-pricing.component';

describe('StarterPricingComponent', () => {
  let component: StarterPricingComponent;
  let fixture: ComponentFixture<StarterPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
