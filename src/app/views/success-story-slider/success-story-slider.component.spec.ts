import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStorySliderComponent } from './success-story-slider.component';

describe('SuccessStorySliderComponent', () => {
  let component: SuccessStorySliderComponent;
  let fixture: ComponentFixture<SuccessStorySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessStorySliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessStorySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
