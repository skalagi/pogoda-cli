import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import { PogodaSkalagiApi } from "./api.interface";
import { environment } from "../../environments/environment";

@Injectable()
export class ApiService {
  public nextUpdate = new EventEmitter();
  public update: EventEmitter<PogodaSkalagiApi> = new EventEmitter();

  private source: string = `${ environment.apiSource }/basic.json`;
  private timeToUpdate: number = null;

  constructor(private http: Http) {
    this.fetch();
    setInterval(() => this.checkForUpdate(), 1000);
  }

  private fetch() {
    this.http.get(this.source)
      .map(res => res.json())
      .subscribe(api => this.handleResponse(api));
  }

  private handleResponse(data) {
    this.timeToUpdate = data.time.next.value;
    this.update.emit(data);
  }

  private checkForUpdate() {
    const { timeToUpdate } = this;

    if (timeToUpdate !== null) {
      if (timeToUpdate > 0) {
        this.nextUpdate.emit(this.timeToUpdate--);
      } else {
        this.nextUpdate.emit(this.timeToUpdate = null);
        this.fetch();
      }
    }
  }
}
