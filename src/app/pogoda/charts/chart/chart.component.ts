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

  ngOnInit() {
    this.api.get(this.range, this.type).subscribe(data => {
      this.options.series = [{ name: this.dataType, data }];
      this.loaded = true;
    });
  }

}
