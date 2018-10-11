import { Component, OnInit, Input } from '@angular/core';
import { DayChartService } from '../../api/charts/day-chart.service';
import { Chart } from 'angular-highcharts';

const textStyle = {
  color: '#fff'
};

@Component({
  selector: 'ws-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() type: string;
  @Input() date: string;
  @Input() range: string;
  @Input() dataType: string;
  @Input() range$;

  loaded = true;
  chart: Chart;

  constructor(private api: DayChartService) { }

  get polRange() {
    switch (this.range) {
      case 'day': return 'dzienny';
      case 'month': return 'miesięczny';
      case 'year': return 'roczny';
    }
  }

  ngOnInit() {
    this.chart = this.createChart();

    this.range$.subscribe(range => {
      this.api.get(range, this.type).subscribe(data => {
        const type = data[0].length > 2 ? 'arearange' : 'line';

        this.chart.removeSerie(0);
        this.chart.addSerie({ type, name: this.dataType,  data });
        // this.loaded = true;
      });
    });
  }

  createChart() {
    return new Chart({
      chart: {
        backgroundColor: 'transparent',
      },

      colors: ['#FFEB3B'],

      xAxis: {
        type: 'datetime',
        labels: {
          style: {
            ...textStyle
          }
        }
      },

      yAxis: {
        min: this.type === 'windGust' ? 0 : null,
        title: {
          text: 'godziny',
          style: {
            ...textStyle
          }
        },
        labels: {
          style: {
            ...textStyle
          }
        }
      },
      series: [{}],
      title: {
        text: '',
      },
    });
  }
}
