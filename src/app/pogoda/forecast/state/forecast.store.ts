import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Simpleforecast, TxtForecast } from '.';

export interface ForecastState {
  simpleforecast: Simpleforecast,
  txt_forecast: TxtForecast,
}

export function createInitialState(): ForecastState {
  return {
    simpleforecast: {
      forecastday: [],
    },
    txt_forecast: {
      forecastday: [],
      date: '',
    },
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'forecast' })
export class ForecastStore extends Store<ForecastState> {

  constructor() {
    super(createInitialState());
  }

}

