import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class DayChartService {
  constructor(private http: Http) {}

  get(range, type) {
    return this.http.get(`${ environment.apiSource }/${ range }-charts/${ type }.json`).pipe(map(res => res.json()));
  }
}
