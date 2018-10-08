import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RecordsService {
  constructor(private http: Http) {}

  get(range, record?) {
    return this.http.get(`${environment.apiSource}/${range}-records.json`)
      .pipe(
        map(res => res.json()),
        map(api => record ? api[record] : api)
      );
  }
}
