import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSliderItemComponent } from './add-slider-item.component';

describe('AddSliderItemComponent', () => {
  let component: AddSliderItemComponent;
  let fixture: ComponentFixture<AddSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSliderItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
