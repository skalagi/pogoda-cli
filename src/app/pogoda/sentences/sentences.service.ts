import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class SentencesService {
  public sentences: Observable<string[]>;
  constructor(http: Http) {
    this.sentences = http.get(`${environment.apiSource}/info.json`).map(res => res.json());
  }
}
