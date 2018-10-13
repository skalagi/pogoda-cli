import { Component, Input } from '@angular/core';
import { chartConfig } from 'app/pogoda/pogoda.chart';
import { decodeType } from 'app/pogoda/charts/charts.helper';
import { Observable } from 'rxjs';
import * as Highcharts from 'highcharts';

export interface BasicChart {
  type: String,
  data: [[number, number]];
}

@Component({
  selector: 'skalagi-basic-chart',
  templateUrl: './basic-chart.component.html',
  styleUrls: ['./basic-chart.component.scss']
})
export class BasicChartComponent {
  @Input() data$: Observable<BasicChart>;
  highCharts = Highcharts;
  options = {
    ...chartConfig,
    chart: {
      ...chartConfig.chart,
      backgroundColor: '#2196f3',
      type: 'area',
      height: 96,
      margin: 0,
    },

    colors: ['#fff'],

    plotOptions: {
      area: {
        fillColor: '#fff',
        lineWidth: 1,
      },
    },

    yAxis: {
      ...chartConfig.yAxis,
      visible: false,
    },
    xAxis: {
      ...chartConfig.xAxis,
      minPadding: 0,
      maxPadding: 0,
      visible: false,
    },
  };

  chartInit(chart) {
    this.data$.subscribe(({ type, data }) => {
      if (chart && data.length) {
        chart.addSeries({ data, name: decodeType(type) });
      }
    });
  }

}
