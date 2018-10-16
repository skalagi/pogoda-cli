import { Component, Input, OnInit } from '@angular/core';
import { RecordsService, RecordsQuery } from '../state';
import { slideTrigger } from 'app/pogoda/pogoda.animation';

@Component({
  selector: 'skalagi-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
  animations: [slideTrigger],
})
export class RecordsComponent implements OnInit {
  ranges: String[] = ['day', 'month', 'year'];
  @Input() public record: string;
  month$;
  year$;
  day$;

  constructor(private _records: RecordsService, private query: RecordsQuery) { }

  ngOnInit() {
    let record = this.record === 'rain' ? 'rainrate' : this.record;
    record = this.record === 'wind' ? 'windspeed' : this.record;

    this.ranges.forEach(range => {
      this[`${range}$`] = this.query.record$(range, record);
    });
  }
}
