import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingReportsComponent } from './messaging-reports.component';

describe('MessagingReportsComponent', () => {
  let component: MessagingReportsComponent;
  let fixture: ComponentFixture<MessagingReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagingReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
