import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOurStoryComponent } from './home-our-story.component';

describe('HomeOurStoryComponent', () => {
  let component: HomeOurStoryComponent;
  let fixture: ComponentFixture<HomeOurStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOurStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOurStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
