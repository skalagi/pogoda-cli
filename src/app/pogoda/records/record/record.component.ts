import { Component, Input, OnInit } from '@angular/core';
import { RecordsQuery } from '../state';

@Component({
  selector: 'skalagi-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  @Input('record') record: string;
  @Input('range') range: string;
  data$;

  constructor(private query: RecordsQuery) {}

  ngOnInit() {
    const { range, record } = this;
    this.data$ = this.query.record$(range, record);
  }
}
