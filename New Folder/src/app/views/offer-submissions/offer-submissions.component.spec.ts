import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSubmissionsComponent } from './offer-submissions.component';

describe('OfferSubmissionsComponent', () => {
  let component: OfferSubmissionsComponent;
  let fixture: ComponentFixture<OfferSubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferSubmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
