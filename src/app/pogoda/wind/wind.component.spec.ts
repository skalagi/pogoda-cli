/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WindComponent } from './wind.component';

describe('WindComponent', () => {
  let component: WindComponent;
  let fixture: ComponentFixture<WindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
