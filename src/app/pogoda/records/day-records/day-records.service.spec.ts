/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DayRecordsService } from './day-records.service';

describe('DayRecordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DayRecordsService]
    });
  });

  it('should ...', inject([DayRecordsService], (service: DayRecordsService) => {
    expect(service).toBeTruthy();
  }));
});
