import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

import { chartConfig } from 'app/pogoda/pogoda.chart';
import { ChartQuery } from '../state';
import { decodeType } from '../charts.helper';

@Component({
  selector: 'skalagi-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @Input() type$;
  highcharts = Highcharts;
  options = { ...chartConfig };

  constructor(private query: ChartQuery) { }

  chartInit(chart) {
    this.type$.subscribe(({ range, type }) => {
      this.query.chart(range, type).subscribe(data => {
        const chartType = data.length && data[0].length > 2 ? 'arearange' : 'line';
        const serie = { type: chartType, data, name: decodeType(type) };

        chart.yAxis[0].update({
          min: type === 'windGust' ? 0 : null,
          title: { text: decodeType(type) },
        }, false);

        if (chart.series[0]) {
          chart.series[0].update(serie, false);
        } else {
          chart.addSeries(serie, false);
        }

        chart.redraw(true);
      });
      // this.loaded = true;
    });
  }
}
