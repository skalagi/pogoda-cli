/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecordsService } from './records.service';

describe('RecordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordsService]
    });
  });

  it('should ...', inject([RecordsService], (service: RecordsService) => {
    expect(service).toBeTruthy();
  }));
});
