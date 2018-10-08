import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SentencesService {
  public sentences: Observable<string[]>;
  constructor(http: Http) {
    this.sentences = http.get(`${environment.apiSource}/info.json`).pipe(map(res => res.json()));
  }
}
