/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RainComponent } from './rain.component';

describe('RainComponent', () => {
  let component: RainComponent;
  let fixture: ComponentFixture<RainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
