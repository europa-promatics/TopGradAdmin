import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateHowItWorksComponent } from './graduate-how-it-works.component';

describe('GraduateHowItWorksComponent', () => {
  let component: GraduateHowItWorksComponent;
  let fixture: ComponentFixture<GraduateHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduateHowItWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduateHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
