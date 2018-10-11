import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUnitComponent } from './basic-unit.component';

describe('BasicUnitComponent', () => {
  let component: BasicUnitComponent;
  let fixture: ComponentFixture<BasicUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
