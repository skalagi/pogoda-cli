import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ChartQuery } from 'app/pogoda/charts/state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'skalagi-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCardComponent implements OnInit {
  @Input() title;
  @Input() type;
  @Input() data;
  chartError$;
  chart$;

  constructor(
    private chartQuery: ChartQuery,
    ) {}

  ngOnInit() {
    const { type } = this;

    this.chartError$ = this.chartQuery.selectError();

    this.chart$ = this.chartQuery.chart('day', type)
      .pipe(map(data => ({ data, type })));
  }
}
