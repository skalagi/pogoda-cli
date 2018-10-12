import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartQuery } from '../state';
import { switchMap } from 'rxjs/operators';
import { chartConfig } from 'app/pogoda/pogoda.chart';

@Component({
  selector: 'skalagi-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() type$;
  chart: Chart;

  constructor(private query: ChartQuery) { }

  ngOnInit() {
    this.chart = this.createChart();

    this.type$.pipe(switchMap(({ range, type }) => {
      if (this.chart.ref) {
        this.chart.ref.yAxis[0].update({
          min: type === 'windGust' ? 0 : null,
          title: { text: '' },
        });
      }
      return this.query.chart(range, type);
    })).subscribe(data => {
      const type = data.length && data[0].length > 2 ? 'arearange' : 'line';
      const serie = { type, name: 'jednostka', data };

      if (this.chart.ref && this.chart.ref.series[0]) {
        this.chart.ref.series[0].update(serie);
      } else {
        this.chart.addSerie(serie);
      }
      // this.loaded = true;
    });
  }

  createChart() {
    return new Chart(chartConfig);
  }
}
