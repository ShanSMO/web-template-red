import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateButtonsComponent } from './template-buttons.component';

describe('TemplateButtonsComponent', () => {
  let component: TemplateButtonsComponent;
  let fixture: ComponentFixture<TemplateButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
