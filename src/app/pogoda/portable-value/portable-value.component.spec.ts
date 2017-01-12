/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PortableValueComponent } from './portable-value.component';

describe('PortableValueComponent', () => {
  let component: PortableValueComponent;
  let fixture: ComponentFixture<PortableValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortableValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortableValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
