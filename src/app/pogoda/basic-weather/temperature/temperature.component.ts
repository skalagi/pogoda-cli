import { Component, OnInit } from '@angular/core';
import { DayRecordsService } from "../../api/records/day-records.service";
import { BasicService } from "../../api/basic/api.service";
import { Temperature, BasicApi } from "../../api/basic/basic.interface";
import { RangeUnit } from "../../api/unit.interface";
import { DayRecords } from "../../api/records/day-records.interface";

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  constructor(private api: BasicService, private day: DayRecordsService) { }
  public records: RangeUnit;
  public loaded: boolean = false;
  public temperature: Temperature;

  ngOnInit() {
    this.day.records.subscribe((records: DayRecords) => this.records = records.temperature);
    this.api.get((api: BasicApi) => {
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
