import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../../../environments/environment';
import { WuForecast } from './forecast.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class ForecastService {
  constructor(private http: Http) { }

  public get(type?: string) {
    return this.http.get(`${environment.apiSource}/wu/forecast.json`)
      .pipe(map(res => res.json()),
        map((api: WuForecast) => {
          const { forecast } = api;
          return type ? forecast[type === 'simple' ? 'simpleforecast' : 'txt_forecast'] : forecast;
        })
      );

  }
}
