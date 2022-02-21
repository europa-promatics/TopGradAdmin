import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerHowItWorksComponent } from './employer-how-it-works.component';

describe('EmployerHowItWorksComponent', () => {
  let component: EmployerHowItWorksComponent;
  let fixture: ComponentFixture<EmployerHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerHowItWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
