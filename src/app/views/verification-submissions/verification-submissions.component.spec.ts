import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationSubmissionsComponent } from './verification-submissions.component';

describe('VerificationSubmissionsComponent', () => {
  let component: VerificationSubmissionsComponent;
  let fixture: ComponentFixture<VerificationSubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationSubmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
