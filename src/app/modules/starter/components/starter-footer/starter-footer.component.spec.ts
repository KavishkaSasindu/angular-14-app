import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterFooterComponent } from './starter-footer.component';

describe('StarterFooterComponent', () => {
  let component: StarterFooterComponent;
  let fixture: ComponentFixture<StarterFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
