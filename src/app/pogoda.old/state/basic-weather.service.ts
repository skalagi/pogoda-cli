import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { BasicWeatherStore } from './basic-weather.store';
import { HttpClient } from '@angular/common/http';
import { BasicService } from 'app/pogoda/api/basic/basic.service';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class BasicWeatherService {

  constructor(private basicWeatherStore: BasicWeatherStore,
              private http: HttpClient) {
    this.http.get(`${ environment.apiSource }/basic.json`)
      .subscribe(response => console.log(response));
  }

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.basicWeatherStore.set(entities);
    // });
  }

}
