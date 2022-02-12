import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleInterviewManagementComponent } from './schedule-interview-management.component';

describe('ScheduleInterviewManagementComponent', () => {
  let component: ScheduleInterviewManagementComponent;
  let fixture: ComponentFixture<ScheduleInterviewManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleInterviewManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleInterviewManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
