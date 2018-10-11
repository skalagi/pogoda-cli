import { Component, Input, OnInit } from '@angular/core';
import { RecordsService, RecordsQuery } from '../state';

@Component({
  selector: 'skalagi-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  ranges: String[] = ['day', 'month', 'year'];
  @Input() public record: string;
  month$;
  year$;
  day$;

  constructor(private _records: RecordsService, private query: RecordsQuery) { }

  ngOnInit() {
    const record = this.record === 'rain' ? 'rainrate' : this.record;

    this.ranges.forEach(range => {
      this[`${range}$`] = this.query.record$(range, record);
    });
  }
}
