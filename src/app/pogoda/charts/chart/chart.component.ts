import { Component, OnInit, Input } from '@angular/core';
import { DayChartService } from "../../api/charts/day-chart.service";

@Component({
  selector: 'ws-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  constructor(private api: DayChartService) { }
  public loaded: boolean = false;
  @Input() public type: string;
  @Input() public date: string;
  @Input() public range: string;
  @Input() public dataType: string;

  public options = {
    title: { text: 'Raport dzienny' },
    xAxis: { type: 'datetime' },
    chart: { type: 'line' },
    series: [],
  };

  get polRange() {
    switch (this.range) {
      case 'day': return 'dzienny';
      case 'month': return 'miesięczny';
      case 'year': return 'roczny';
    }
  }

  ngOnInit() {
    this.api.get(this.range, this.type).subscribe(data => {
      this.options.chart.type = data[0].length > 2 ? 'arearange' : 'line';
      this.options.title.text = `Raport ${ this.polRange }`;
      this.options.series = [{ name: this.dataType, data }];
      this.loaded = true;
    });
  }
}
