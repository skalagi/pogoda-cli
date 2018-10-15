import { Component, OnInit, Input } from '@angular/core';
import { BasicWeatherQuery } from '../state';
import { ChartQuery } from 'app/pogoda/charts/state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'skalagi-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent implements OnInit {
  @Input() title;
  @Input() type;
  chartError$;
  loading$;
  error$;
  basic$;
  chart$;

  constructor(
    private query: BasicWeatherQuery,
    private chartQuery: ChartQuery,
    ) {}

  ngOnInit() {
    const { type } = this;

    this.loading$ = this.query.selectLoading();
    this.chartError$ = this.chartQuery.selectError();
    this.error$ = this.query.selectError();

    this.basic$ = this.query.basic(type);
    this.chart$ = this.chartQuery.chart('day', type)
      .pipe(map(data => ({ data, type })));
  }
}
