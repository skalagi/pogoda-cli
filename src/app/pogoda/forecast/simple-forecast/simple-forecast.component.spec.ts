import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleForecastComponent } from './simple-forecast.component';

describe('SimpleForecastComponent', () => {
  let component: SimpleForecastComponent;
  let fixture: ComponentFixture<SimpleForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
