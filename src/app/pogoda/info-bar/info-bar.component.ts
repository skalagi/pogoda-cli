import { Component, OnInit } from '@angular/core';
import { BasicService } from "../api/basic/basic.service";
import { BasicApi } from "../api/basic/basic.interface";
import { Unit, WindUnit } from "../api/unit.interface";

@Component({
  selector: 'info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnInit {
  public recordsAmount: number = 0;
  public temperature: Unit;
  public pressure: Unit;
  public wind: WindUnit;

  constructor(private basic: BasicService) {}

  ngOnInit() {
    this.basic.get((api: BasicApi) => {
      this.recordsAmount = api.count;

      this.temperature = api.temperature.current;
      this.pressure = api.barometer.current;
      this.wind = api.wind.current;
    });
  }
}
