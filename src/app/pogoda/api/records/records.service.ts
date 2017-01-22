import { environment } from "../../../../environments/environment";
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class RecordsService {
  constructor(private http: Http) {}

  get(type) {
    return this.http.get(`${environment.apiSource}/${type}-records.json`)
      .map(res => res.json())
  }
}
