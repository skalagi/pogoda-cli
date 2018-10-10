import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SentencesStore, SentencesState } from './sentences.store';
import { Sentence } from './sentence.model';

@Injectable({ providedIn: 'root' })
export class SentencesQuery extends QueryEntity<SentencesState, Sentence> {

  constructor(protected store: SentencesStore) {
    super(store);
  }

}
