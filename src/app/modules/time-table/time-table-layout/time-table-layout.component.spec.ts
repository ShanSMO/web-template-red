import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableLayoutComponent } from './time-table-layout.component';

describe('TimeTableLayoutComponent', () => {
  let component: TimeTableLayoutComponent;
  let fixture: ComponentFixture<TimeTableLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTableLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
