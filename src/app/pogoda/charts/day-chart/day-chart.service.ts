import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { environment } from "../../../../environments/environment";

@Injectable()
export class DayChartService {
  constructor(private http: Http) {}

  get(type) {
    return this.http.get(`${ environment.apiSource }/day-charts/${ type }.json`).map(res => res.json());
  }
}
