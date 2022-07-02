import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingForEveryoneComponent } from './something-for-everyone.component';

describe('SomethingForEveryoneComponent', () => {
  let component: SomethingForEveryoneComponent;
  let fixture: ComponentFixture<SomethingForEveryoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomethingForEveryoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomethingForEveryoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
