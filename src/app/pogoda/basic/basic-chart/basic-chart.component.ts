import { Component, Input, AfterViewInit, HostBinding, ElementRef, OnDestroy } from '@angular/core';
import { chartConfig } from 'app/pogoda/pogoda.chart';
import { decodeType, minMax } from 'app/pogoda/charts/charts.helper';
import { Observable, Subject, BehaviorSubject, Subscription } from 'rxjs';
import * as Highcharts from 'highcharts';
import { ResizeObserver } from 'resize-observer';
import { take } from 'rxjs/operators';

export interface BasicChart {
  type: String,
  data: [[number, number]];
}

@Component({
  selector: 'skalagi-basic-chart',
  templateUrl: './basic-chart.component.html',
  styleUrls: ['./basic-chart.component.scss'],
})
export class BasicChartComponent implements AfterViewInit, OnDestroy {
  @Input() data$: Observable<BasicChart>;
  private chart$ = new BehaviorSubject(null);
  private resize$: ResizeObserver;
  highCharts = Highcharts;
  update = true;
  options = {
    ...chartConfig,
    chart: {
      ...chartConfig.chart,
      backgroundColor: '#ffd740',
      type: 'area',
      height: 64,
      margin: 0,
    },

    tooltip: {
      enabled: false,
    },

    plotOptions: {
      ...chartConfig.plotOptions,
      area: {
        ...chartConfig.plotOptions.area,
        lineWidth: 5,
        fillColor: '#fff',
        color: '#1E88E5',
        negativeFillColor: 'red',

        marker: {
          enabled: false,
        },
      },
    },

    yAxis: {
      ...chartConfig.yAxis,
      endOnTick: false,
      maxPadding: .1,
      visible: false,
    },
    xAxis: {
      ...chartConfig.xAxis,
      minPadding: 0,
      maxPadding: 0,
      visible: false,
    },
  };

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.resize$ = new ResizeObserver(entries => this.resize(entries));

    this.resize$.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.resize$.unobserve(this.el.nativeElement);
  }

  resize(entries) {
    this.chart$.pipe(take(1)).subscribe(chart => {
      if (chart) {
        chart.reflow();
      }
    });
  }

  chartInit(chart) {
    this.data$.subscribe(({ type, data }) => {
      this.chart$.next(chart);
      if (chart && data.length) {
        const isEmpty = data.every(point => point[1] === 0);

        if (isEmpty) {
          chart.addSeries({ data: data.map(point => [point[0], point[1] + 1]), name: decodeType(type) }, false);
          chart.yAxis[0].update({ min: 0, max: 2 }, false);
        } else {
          chart.yAxis[0].update({ ...minMax(type, data), }, false);
          chart.addSeries({ data, name: decodeType(type) }, false);
        }

        chart.redraw();
      }
    });
  }

}
