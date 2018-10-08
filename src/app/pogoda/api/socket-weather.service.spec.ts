import { TestBed } from '@angular/core/testing';

import { SocketWeatherService } from './socket-weather.service';

describe('SocketWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocketWeatherService = TestBed.get(SocketWeatherService);
    expect(service).toBeTruthy();
  });
});
