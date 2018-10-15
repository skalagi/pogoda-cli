import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';
import { SentencesStore } from './sentences.store';
import { createSentence } from './sentence.model';

@Injectable({ providedIn: 'root' })
export class SentencesService {

  constructor(private store: SentencesStore, private http: HttpClient) {
    http.get(`${environment.apiSource}/info.json`)
      .subscribe((entities: String[]) => {
      this.store.set(entities.map(entity => createSentence({ content: entity })));
    }, err => { console.log(err); this.store.setError(err); });
  }

}
