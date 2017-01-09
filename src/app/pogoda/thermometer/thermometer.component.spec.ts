/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThermometerComponent } from './thermometer.component';

describe('ThermometerComponent', () => {
  let component: ThermometerComponent;
  let fixture: ComponentFixture<ThermometerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermometerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
