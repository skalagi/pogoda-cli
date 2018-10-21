import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetUnitComponent } from './widget-unit.component';

describe('WidgetUnitComponent', () => {
  let component: WidgetUnitComponent;
  let fixture: ComponentFixture<WidgetUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
