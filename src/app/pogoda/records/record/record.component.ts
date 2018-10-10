import { Component, Input, OnInit } from '@angular/core';
import { RecordsQuery } from '../state';

@Component({
  selector: 'record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  @Input('range') range: string;
  @Input('record') record: string;
  public data$;

  constructor(private query: RecordsQuery) {}

  ngOnInit() {
    const { range, record } = this;
    this.data$ = this.query.record$(range, record);
  }
}
