import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewinfoComponent } from './reviewinfo.component';

describe('ReviewinfoComponent', () => {
  let component: ReviewinfoComponent;
  let fixture: ComponentFixture<ReviewinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
