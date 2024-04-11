import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterMainServicesComponent } from './starter-main-services.component';

describe('StarterMainServicesComponent', () => {
  let component: StarterMainServicesComponent;
  let fixture: ComponentFixture<StarterMainServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterMainServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterMainServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
