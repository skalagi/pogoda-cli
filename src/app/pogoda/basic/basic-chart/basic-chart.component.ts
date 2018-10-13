import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { chartConfig } from 'app/pogoda/pogoda.chart';
import { decodeType } from 'app/pogoda/charts/charts.helper';

@Component({
  selector: 'skalagi-basic-chart',
  templateUrl: './basic-chart.component.html',
  styleUrls: ['./basic-chart.component.scss']
})
export class BasicChartComponent implements OnInit {
  @Input() data$;
  chart: Chart;

  ngOnInit() {
    this.chart = this.createChart();
    this.data$.subscribe(({ type, data }) => {
      this.chart.removeSerie(0);
      this.chart.addSerie({ data, name: decodeType(type) });
    });
  }

  createChart() {
    return new Chart({
      ...chartConfig,
      chart: {
        ...chartConfig.chart,
        backgroundColor: '#2196f3',
        height: 128,
        margin: 0,
        type: 'area',
      },

      colors: ['#2196f3'],

      plotOptions: {
        area: {
          fillColor: '#fff',
          lineWidth: 1,
          marker: {
            enabled: false,
          },
        },
      },

      yAxis: {
        ...chartConfig.yAxis,
        visible: false,
      },
      xAxis: {
        ...chartConfig.xAxis,
        visible: false,
      },
      legend: {
        ...chartConfig.legend,
        enabled: false,
      },
    });
  }

}
