/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DayChartService } from './day-chart.service';

describe('DayChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DayChartService]
    });
  });

  it('should ...', inject([DayChartService], (service: DayChartService) => {
    expect(service).toBeTruthy();
  }));
});
