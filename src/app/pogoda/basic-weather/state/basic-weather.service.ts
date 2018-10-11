import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { BasicWeatherStore } from './basic-weather.store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class BasicWeatherService {

  constructor(private basicWeatherStore: BasicWeatherStore,
              private http: HttpClient) {
    this.http.get(`${ environment.apiSource }/basic.json?temperature&rain&barometer&humidity&wind`)
      .subscribe(response => this.basicWeatherStore.setState(state => ({ ...state, ...response })));
  }

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.basicWeatherStore.set(entities);
    // });
  }

}
