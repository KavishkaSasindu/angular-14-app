import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleFooterComponent } from './console-footer.component';

describe('ConsoleFooterComponent', () => {
  let component: ConsoleFooterComponent;
  let fixture: ComponentFixture<ConsoleFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsoleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
