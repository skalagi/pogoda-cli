import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDataComponent } from './basic-data.component';

describe('BasicWeatherDataComponent', () => {
  let component: BasicDataComponent;
  let fixture: ComponentFixture<BasicDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
