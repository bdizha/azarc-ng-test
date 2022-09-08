import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StaffDetailsComponent } from './staff-details.component';

describe('StaffDetailsComponent', () => {
  let component: StaffDetailsComponent;
  let fixture: ComponentFixture<StaffDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
