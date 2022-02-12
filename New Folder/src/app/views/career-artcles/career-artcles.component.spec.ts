import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerArtclesComponent } from './career-artcles.component';

describe('CareerArtclesComponent', () => {
  let component: CareerArtclesComponent;
  let fixture: ComponentFixture<CareerArtclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerArtclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerArtclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
