/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SentencesComponent } from './sentences.component';

describe('SentencesComponent', () => {
  let component: SentencesComponent;
  let fixture: ComponentFixture<SentencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
