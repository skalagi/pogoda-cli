import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { ChartStore } from './chart.store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class ChartService {
  private types = new Set();

  constructor(private store: ChartStore, private http: HttpClient) { }

  load(type, range) {
    if (this.types.has(type + range)) { return; }
    this.types.add(type + range);

    this.http.get(`${ environment.apiSource }/${ range }-charts/${ type }.json`)
      .subscribe(data => {
        this.store.setState(state => {
          const _type = { ...state[type] };
          _type[range] = data;

          return { ...state, [type]: _type };
        });
      });
  }

}
