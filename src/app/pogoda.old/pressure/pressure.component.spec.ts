/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PressureComponent } from './pressure.component';

describe('PressureComponent', () => {
  let component: PressureComponent;
  let fixture: ComponentFixture<PressureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
