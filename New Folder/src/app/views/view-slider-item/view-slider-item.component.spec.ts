import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSliderItemComponent } from './view-slider-item.component';

describe('ViewSliderItemComponent', () => {
  let component: ViewSliderItemComponent;
  let fixture: ComponentFixture<ViewSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSliderItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
