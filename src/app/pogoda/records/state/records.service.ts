import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { RecordsStore } from './records.store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Records } from './records';

@Injectable({ providedIn: 'root' })
export class RecordsService {
  constructor(private recordsStore: RecordsStore,
    private http: HttpClient) {
      this.preload('day');
      this.preload('month');
      this.preload('year');
    }

  preload(range) {
    this.http.get(`${environment.apiSource}/${range}-records.json`)
      .subscribe((records: Records) => {
        this.recordsStore.setState(state => {
          return { ...state, [range]: records };
        });
      }, err => { this.recordsStore.setError(err); });
  }
}
