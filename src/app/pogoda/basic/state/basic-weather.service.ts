import { Injectable } from '@angular/core';
import { BasicWeatherStore } from './basic-weather.store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class BasicWeatherService {

  constructor(private basicWeatherStore: BasicWeatherStore, private http: HttpClient) {
    this.http.get(`${ environment.apiSource }/basic.json?count&temperature&rain&barometer&humidity&wind`)
      .subscribe(response => this.basicWeatherStore.setState(state => ({ ...state, ...response })));
  }
}
