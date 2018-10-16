import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { RecordsStore } from './records.store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Records } from './records';

@Injectable({ providedIn: 'root' })
export class RecordsService {
  private ranges = new Set();
  constructor(private store: RecordsStore, private http: HttpClient) {}

  update() {
    this.ranges.forEach(range => this.load(range));
  }

  load(range) {
    this.store.setLoading(true);

    if (this.ranges.has(range)) {
      this.store.setLoading(false);
      return;
    }

    this.ranges.add(range);

    this.http.get(`${environment.apiSource}/${range}-records.json`)
      .subscribe((records: Records) => {
        this.store.setState(state => {
          return { ...state, [range]: records };
        });
        this.store.setLoading(false);
      }, err => { this.store.setError(err); });
  }
}
