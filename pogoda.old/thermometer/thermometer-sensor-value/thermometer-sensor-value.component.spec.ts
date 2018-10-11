/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThermometerSensorValueComponent } from './thermometer-sensor-value.component';

describe('ThermometerSensorValueComponent', () => {
  let component: ThermometerSensorValueComponent;
  let fixture: ComponentFixture<ThermometerSensorValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermometerSensorValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermometerSensorValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
