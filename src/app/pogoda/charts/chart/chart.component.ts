import { Component, OnInit, Input } from '@angular/core';
import { DayChartService } from '../../api/charts/day-chart.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'ws-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public loaded = false;
  @Input() public type: string;
  @Input() public date: string;
  @Input() public range: string;
  @Input() public dataType: string;

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
    this.api.get(this.range, this.type).subscribe(data => {
      this.chart = new Chart({
        chart: {
          type: data[0].length > 2 ? 'arearange' : 'line',
        },

        xAxis: { type: 'datetime' },

        yAxis: {
          min: this.type === 'windGust' ? 0 : null,
        },
        title: {
          text: '',
        },
        series: [
          { name: this.dataType, data },
        ]
      });

      this.loaded = true;
    });
  }
}
