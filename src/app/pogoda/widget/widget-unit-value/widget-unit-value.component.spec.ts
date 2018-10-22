import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetUnitValueComponent } from './widget-unit-value.component';

describe('WidgetUnitValueComponent', () => {
  let component: WidgetUnitValueComponent;
  let fixture: ComponentFixture<WidgetUnitValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetUnitValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetUnitValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
