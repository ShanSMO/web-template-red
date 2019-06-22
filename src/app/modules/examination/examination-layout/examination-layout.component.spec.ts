import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationLayoutComponent } from './examination-layout.component';

describe('ExaminationLayoutComponent', () => {
  let component: ExaminationLayoutComponent;
  let fixture: ComponentFixture<ExaminationLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
