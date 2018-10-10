import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { BasicApi } from './basic-weather';

import { unit } from '../../unit/unit';

export interface BasicWeatherState extends BasicApi {}

export function createInitialState(): BasicWeatherState {
  return {
    temperature: {
      current: unit({ value: 10, units: '°C' }),
      dewPoint: unit(),
      real: unit(),
      trend: unit()
    },
    barometer: {
      current: unit({ units: 'hPa'}),
      trend: unit({ units: 'hPa'})
    },
    count: 0,
    humidity: unit({ units: '%', value: 50 }),
    rain: {
      current: unit({ units: 'mm'}),
      sum: unit({ units: 'mm' })
    },
    time: {
      data: unit(),
      next: unit()
    },
    wind: {
      current: {
        dir: unit(),
        speed: unit(),
        translated: ''
      },
      gust: {
        dir: unit(),
        speed: unit(),
        translated: ''
      }
    }
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'basic-weather' })
export class BasicWeatherStore extends Store<BasicWeatherState> {
  constructor() {
    super(createInitialState());
  }
}
