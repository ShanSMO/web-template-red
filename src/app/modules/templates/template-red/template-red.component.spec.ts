import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRedComponent } from './template-red.component';

describe('TemplateRedComponent', () => {
  let component: TemplateRedComponent;
  let fixture: ComponentFixture<TemplateRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
