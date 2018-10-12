import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ChartStore, ChartState } from './chart.store';
import { ChartService } from './chart.service';

@Injectable({ providedIn: 'root' })
export class ChartQuery extends Query<ChartState> {

  constructor(protected store: ChartStore, private service: ChartService) {
    super(store);
  }

  chart(range, type) {
    this.service.load(type, range);
    return this.select(state => state[type][range]);
  }

}
