import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { chartConfig } from 'app/pogoda/pogoda.chart';
import { decodeType } from 'app/pogoda/charts/charts.helper';
import { combineLatest, Observable } from 'rxjs';
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
export class BasicChartComponent implements OnInit, AfterViewInit {
  @Input() data$: Observable<BasicChart>;
  highCharts = Highcharts;
  options = {
    ...chartConfig,
    chart: {
      ...chartConfig.chart,
      backgroundColor: '#2196f3',
      height: 96,
      type: 'area',
    },

    colors: ['#fff'],

    plotOptions: {
      area: {
        fillColor: '#fff',
        negativeColor: '#fff',
        negativeFillColor: '#fff',
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
      gridLineColor: 'amber',
      visible: true,
    },
    legend: {
      ...chartConfig.legend,
      enabled: false,
    },
  };

  chartInit(chart) {
    this.data$.subscribe(({ type, data }) => {
      if (chart && data.length) {
        chart.addSeries({ data, name: decodeType(type) });
      }
    });
  }

  ngAfterViewInit() {
    // this.chart.ref.reflow();

  }

  ngOnInit() {
    // this.chart = this.createChart();
    /*
    combineLatest(this.data$, this.chart.ref$).subscribe((res) => {
      const { type, data } = res[0];
      const chart: Highcharts.ChartObject = res[1];
    });
    */
  }

}
