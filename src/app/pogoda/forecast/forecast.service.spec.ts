/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ForecastService } from './forecast.service';

describe('ForecastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForecastService]
    });
  });

  it('should ...', inject([ForecastService], (service: ForecastService) => {
    expect(service).toBeTruthy();
  }));
});
