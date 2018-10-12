import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { chartConfig } from 'app/pogoda/pogoda.chart';

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
    this.data$.subscribe(data => {
      this.chart.removeSerie(0);
      this.chart.addSerie({ data });
    });
  }

  createChart() {
    return new Chart({
      ...chartConfig,
      chart: {
        height: 128,
      },
      plotOptions: {
        line: {
          lineWidth: 4,
          marker: {
            enabled: false,
          },
        },
      },
      yAxis: {
        visible: false,
      },
      xAxis: {
        visible: false,
      },
      legend: {
        enabled: false,
      },
      series: [{
        data: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 2], [5, 0]],
      }],
    });
  }

}
