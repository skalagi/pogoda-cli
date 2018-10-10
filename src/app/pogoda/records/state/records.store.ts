import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Records, records } from './records';


export interface RecordsState {
  key: string;
  day: Records;
  month: Records;
  year: Records;
}

export function createInitialState(): RecordsState {
  return {
    key: '',
    day: records(),
    month: records(),
    year: records(),
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'records' })
export class RecordsStore extends Store<RecordsState> {

  constructor() {
    super(createInitialState());
  }

}

