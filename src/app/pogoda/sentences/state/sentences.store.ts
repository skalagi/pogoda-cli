import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Sentence } from './sentence.model';

export interface SentencesState extends EntityState<Sentence> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'sentences' })
export class SentencesStore extends EntityStore<SentencesState, Sentence> {

  constructor() {
    super();
  }

}

