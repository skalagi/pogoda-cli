import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../../api/records/records.service';
import { BasicService } from '../../api/basic/basic.service';
import { Temperature, BasicApi } from '../../api/basic/basic.interface';
import { Records, Record } from '../../api/records/records.interface';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  public temperature: Temperature;
  public records: Record;
  public loaded = false;
  constructor(private api: BasicService, private recordsApi: RecordsService) { }

  ngOnInit() {
    this.recordsApi.get('day').subscribe((records: Records) => this.records = records.temperature);
    this.api.get((api: BasicApi) => {
      this.temperature = api.temperature;
      this.loaded = true;
    });
  }

  get trend() {
    if (!this.temperature) { return; }
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