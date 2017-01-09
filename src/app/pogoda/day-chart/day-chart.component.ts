import { Component, OnInit, Input } from '@angular/core';
import { DayChartService } from "./day-chart.service";

@Component({
  selector: 'app-day-chart',
  templateUrl: './day-chart.component.html',
  styleUrls: ['./day-chart.component.css']
})
export class DayChartComponent implements OnInit {
  constructor(private api: DayChartService) { }
  public loaded: boolean = false;
  @Input() public type: string;
  @Input() public date: string;
  private data = [];

  get options() {
    const { data } = this;
    return {
      xAxis: { type: 'datetime' },
      chart: { type: 'line' },
      series: [{ data }],
    };
  }

  ngOnInit() {
    this.api.get(this.type).subscribe(data => {
      this.data = data;
      this.loaded = true;
    });
  }

}
