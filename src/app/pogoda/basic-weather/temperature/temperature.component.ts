import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../api.service";
import { PogodaSkalagiApi, Temperature } from "../../api.interface";
import { DayRecordsService } from "../../records/day-records/day-records.service";
import { DayRecords, RangeUnit } from "../../records/day-records/day-records.interface";

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  constructor(private api: ApiService, private day: DayRecordsService) { }
  public records: RangeUnit;
  public loaded: boolean = false;
  public temperature: Temperature;

  ngOnInit() {
    this.day.records.subscribe((records: DayRecords) => this.records = records.temperature);
    this.api.get((api: PogodaSkalagiApi) => {
      this.temperature = api.temperature;
      this.loaded = true;
    });
  }

  get trend() {
    if (!this.temperature) return;
    const { trend: { value: trend } } = this.temperature;

    switch (true) {
      case trend > 0:
        return 'arrow_upward';
      case trend < 0:
        return 'arrow_downward';
      default: return;
    }
  }
}
