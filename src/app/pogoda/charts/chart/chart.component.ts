import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartQuery } from '../state';

const textStyle = {
  fontWeight: '600',
  color: '#fff',
};

@Component({
  selector: 'skalagi-chart',
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

  constructor(private query: ChartQuery) { }

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
      this.query.chart(range, this.dataType).subscribe(data => {
        const type = data[0] && data[0].length > 2 ? 'arearange' : 'line';

        this.chart.removeSerie(0);
        this.chart.addSerie({ type, name: this.type, data });
        // this.chart.ref.yAxis[0].update({title: { text:  }});
        // this.loaded = true;
      });
    });
  }

  createChart() {
    return new Chart({
      chart: {
        backgroundColor: 'transparent',
      },

      credits: { enabled: false },

      colors: ['#FFEB3B'],

      legend: {
        itemStyle: {
          ...textStyle
        }
      },

      xAxis: {
        type: 'datetime',
        labels: {
          style: {
            ...textStyle,
          }
        }
      },

      yAxis: {
        min: this.type === 'windGust' ? 0 : null,
        title: {
          text: '',
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
      series: [],
      title: {
        text: '',
      },
    });
  }
}
