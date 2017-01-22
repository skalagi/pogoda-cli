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
  @Input() public dataType: string;

  public options = {
    title: { text: 'Raport dzienny' },
    xAxis: { type: 'datetime' },
    chart: { type: 'line' },
    series: [],
  };

  ngOnInit() {
    this.api.get(this.type).subscribe(data => {
      this.options.series = [{ name: this.dataType, data }];
      this.loaded = true;
    });
  }

}
