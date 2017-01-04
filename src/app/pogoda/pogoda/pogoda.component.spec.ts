/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PogodaComponent } from './pogoda.component';

describe('PogodaComponent', () => {
  let component: PogodaComponent;
  let fixture: ComponentFixture<PogodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PogodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PogodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
