import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { switchMap } from 'rxjs/operators';

import { chartConfig } from 'app/pogoda/pogoda.chart';
import { ChartQuery } from '../state';

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
    this.type$.pipe(switchMap(({ range, type }) => {
      if (chart) {
        chart.yAxis[0].update({
          min: type === 'windGust' ? 0 : null,
          title: { text: '' },
        });
      }
      return this.query.chart(range, type);
    })).subscribe(data => {
      const type = data.length && data[0].length > 2 ? 'arearange' : 'line';
      const serie = { type, name: 'jednostka', data };

      if (chart && chart.series[0]) {
        chart.series[0].update(serie);
      } else {
        chart.addSeries(serie);
      }
      // this.loaded = true;
    });
  }
}
