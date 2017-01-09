import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import { PogodaSkalagiApi } from "./api.interface";
import { environment } from "../../environments/environment";

@Injectable()
export class ApiService {
  public nextUpdate = new EventEmitter();
  public update: EventEmitter<PogodaSkalagiApi> = new EventEmitter();
  public data: PogodaSkalagiApi;

  private source: string = `${ environment.apiSource }/basic.json`;
  private timeToReconnect = null;
  private timeToUpdate = null;

  constructor(private http: Http) {
    this.fetch();
    setInterval(() => this.checkForUpdate(), 1000);
  }

  get(method) {
    const { data, update } = this;
    if (data) method(data);
    update.subscribe(method);
  }

  private fetch() {
    this.http.get(this.source)
      .map(res => res.json())
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
