import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../../../environments/environment';

import { BasicApi } from './basic.interface';
import { map } from 'rxjs/operators';


@Injectable()
export class BasicService {
  public nextUpdate = new EventEmitter();
  public update: EventEmitter<BasicApi> = new EventEmitter();
  public data: BasicApi;

  private source = `${ environment.apiSource }/basic.json`;
  private timeToReconnect = null;
  private timeToUpdate = null;

  constructor(private http: Http) {
    this.fetch();
    setInterval(() => this.checkForUpdate(), 1000);
  }

  get(method) {
    const { data, update } = this;

    if (data) {
      method(data);
    }

    update.subscribe(method);
  }

  private fetch() {
    this.http.get(this.source)
      .pipe(map(res => res.json()))
      .subscribe(api => this.handleResponse(api));
  }

  private handleResponse(data) {
    this.timeToUpdate = data.time.next.value;
    this.update.emit(data);
    this.data = data;
  }

  private checkForUpdate() {
    const { timeToUpdate, timeToReconnect } = this;

    if (timeToUpdate === 'offline') {
      if (!timeToReconnect) {
        this.nextUpdate.emit(this.timeToUpdate = null);
        this.timeToReconnect = 10;
      } else if (timeToReconnect === 0) {
        this.timeToReconnect = null;
        this.fetch();
      } else {
        this.timeToReconnect--;
      }
    } else if (timeToUpdate !== null) {
      if (timeToUpdate > 0) {
        this.nextUpdate.emit(this.timeToUpdate--);
      } else {
        this.nextUpdate.emit(this.timeToUpdate = null);
        this.fetch();
      }
    }
  }
}
