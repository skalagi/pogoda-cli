import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ChartStore, ChartState } from './chart.store';

@Injectable({ providedIn: 'root' })
export class ChartQuery extends Query<ChartState> {

  constructor(protected store: ChartStore) {
    super(store);
  }

  chart(range, type) {
    console.log(range, type);
    return this.select(state => state[type][range]);
  }

}
