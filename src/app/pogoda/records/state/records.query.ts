import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { RecordsStore, RecordsState } from './records.store';

@Injectable({ providedIn: 'root' })
export class RecordsQuery extends Query<RecordsState> {
  constructor(protected store: RecordsStore) {
    super(store);
  }

  record$(range, record) {
    return this.select(records => {
      return records[range][record];
    });
  }
}
