import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { ForecastStore } from './forecast.store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class ForecastService {

  constructor(private store: ForecastStore, private http: HttpClient) {
    this.get();
  }

  get() {
    this.store.setLoading(true);
    this.http.get(`${ environment.apiSource }/wu/forecast.json`)
      .subscribe(({ forecast }: any) => {
        this.store.setLoading(false);
        this.store.setState(state => ({ ...state, ...forecast }));
      }, err => {
        this.store.setLoading(false);
        this.store.setError(err);
      });
  }

}
