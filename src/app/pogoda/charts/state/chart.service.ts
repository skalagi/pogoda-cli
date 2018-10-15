import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { ChartStore } from './chart.store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class ChartService {
  private types = new Set();

  constructor(private store: ChartStore, private http: HttpClient) { }

  private parseData(data, type, range) {
    if (type === 'humidity' && range === 'day') {
      return data.filter(point => point[1]);
    }

    return data;
  }

  decodeType(type) {
    switch (type) {
      case 'outTemp': return 'temperature';
      case 'outHumidity': return 'humidity';
      case 'windGust': return 'wind';
    }

    return type;
  }

  encodeType(rawType) {
    switch (rawType) {
      case 'temperature': return 'outTemp';
      case 'humidity': return 'outHumidity';
      case 'wind': return 'windGust';
    }

    return rawType;
  }

  load(type, range) {
    this.store.setLoading(true);

    const chartType = this.encodeType(type);

    if (this.types.has(type + range)) { return; }

    this.types.add(type + range);

    this.http.get(`${ environment.apiSource }/${ range }-charts/${ chartType }.json`)
      .subscribe(data => {
        this.store.setState(state => {
          const _type = { ...state[type] };

          _type[range] = this.parseData(data, type, range);

          return { ...state, [type]: _type };
        });
        this.store.setLoading(false);
      });
  }

}
