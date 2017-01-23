import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { environment } from "../../../../environments/environment";

@Injectable()
export class DayChartService {
  constructor(private http: Http) {}

  get(range, type) {
    return this.http.get(`${ environment.apiSource }/${ range }-charts/${ type }.json`).map(res => res.json());
  }
}
