import { Component, Input, AfterViewInit } from '@angular/core';
import { chartConfig } from 'app/pogoda/pogoda.chart';
import { decodeType } from 'app/pogoda/charts/charts.helper';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
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
export class BasicChartComponent implements AfterViewInit {
  @Input() data$: Observable<BasicChart>;
  private chart$ = new BehaviorSubject(null);
  highCharts = Highcharts;
  options = {
    ...chartConfig,
    chart: {
      ...chartConfig.chart,
      backgroundColor: '#2196f3',
      type: 'area',
      height: 64,
      margin: 0,
    },

    plotOptions: {
      area: {
        fillColor: '#fff',
        lineWidth: 1,
      },
    },

    yAxis: {
      ...chartConfig.yAxis,
      endOnTick: false,
      minPadding: 0,
      maxPadding: 0,
      visible: false,
    },
    xAxis: {
      ...chartConfig.xAxis,
      minPadding: 0,
      maxPadding: 0,
      visible: false,
    },
  };

  ngAfterViewInit() {
    this.chart$.subscribe(chart => chart ? chart.reflow() : chart);
  }

  chartInit(chart) {
    this.data$.subscribe(({ type, data }) => {
      if (chart && data.length) {
        this.chart$.next(chart);

        let min;

        data.forEach(point => {
          if (!min || point[1] < min) {
            min = point[1];
          }
        });

        chart.yAxis[0].update({ min });
        chart.addSeries({ data, name: decodeType(type) }, false);
        chart.redraw();
        chart.reflow();
      }
    });
  }

}
