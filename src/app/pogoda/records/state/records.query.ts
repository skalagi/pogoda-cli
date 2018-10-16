import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { RecordsStore, RecordsState } from './records.store';
import { RecordsService } from './records.service';

@Injectable({ providedIn: 'root' })
export class RecordsQuery extends Query<RecordsState> {
  constructor(protected store: RecordsStore, private service: RecordsService) {
    super(store);
  }

  record$(range, record) {
    this.service.load(range);
    return this.select(records => {
      return records[range][record];
    });
  }
}
