/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThermometerSensorComponent } from './thermometer-sensor.component';

describe('ThermometerSensorComponent', () => {
  let component: ThermometerSensorComponent;
  let fixture: ComponentFixture<ThermometerSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermometerSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermometerSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
