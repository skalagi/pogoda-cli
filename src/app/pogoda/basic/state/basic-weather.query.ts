import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { BasicWeatherStore, BasicWeatherState } from './basic-weather.store';

@Injectable({ providedIn: 'root' })
export class BasicWeatherQuery extends Query<BasicWeatherState> {

  constructor(protected store: BasicWeatherStore) {
    super(store);
  }

  basic(type) {
    return this.select(basic => basic[type]);
  }

}
