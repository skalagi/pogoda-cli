import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ForecastStore, ForecastState } from './forecast.store';
import { ForecastService } from './forecast.service';

@Injectable({ providedIn: 'root' })
export class ForecastQuery extends Query<ForecastState> {

  constructor(protected store: ForecastStore, private service: ForecastService) {
    super(store);
  }

}
