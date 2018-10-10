import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { SentencesStore } from './sentences.store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class SentencesService {

  constructor(private sentencesStore: SentencesStore,
              private http: HttpClient) {
    http.get(`${environment.apiSource}/info.json`).subscribe(data => {
      console.log(data);
    });
  }

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.sentencesStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity: ServerResponse) => {
      // this.sentencesStore.add(entity);
    // });
  }

}
