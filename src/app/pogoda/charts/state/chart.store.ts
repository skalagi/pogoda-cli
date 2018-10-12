import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ChartState {

}

const ranges = { day: [], month: [], year: [] };

export function createInitialState(): ChartState {
  return {
    outTemp: ranges,
    barometer: ranges,
    outHumidity: ranges,
    rain: ranges,
    time: ranges,
    windGust: ranges,
    windCurrent: ranges,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'chart' })
export class ChartStore extends Store<ChartState> {

  constructor() {
    super(createInitialState());
  }

}

