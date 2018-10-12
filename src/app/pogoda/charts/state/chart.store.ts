import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ChartState {

}

const ranges = { day: [], month: [], year: [] };

export function createInitialState(): ChartState {
  return {
    temperature: ranges,
    barometer: ranges,
    humidity: ranges,
    rain: ranges,
    time: ranges,
    wind: ranges,
    windGustDir: ranges,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'chart' })
export class ChartStore extends Store<ChartState> {

  constructor() {
    super(createInitialState());
  }

}

