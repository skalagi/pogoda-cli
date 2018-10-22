import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BasicWeatherQuery } from 'app/pogoda/basic/state';
import { RecordsQuery } from 'app/pogoda/records/state';

@Component({
  selector: 'skalagi-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent implements OnInit {
  records$;
  basic$;

  constructor(private query: BasicWeatherQuery, private recordsQuery: RecordsQuery) { }

  ngOnInit() {
    this.basic$ = this.query.select();
    this.records$ = this.recordsQuery.record$('day');
  }

}
