import { Pressure, Temperature, Wind } from './../api/basic/basic.interface';
import { Component, OnInit } from '@angular/core';
import { BasicService } from '../api/basic/basic.service';
import { BasicApi } from '../api/basic/basic.interface';

@Component({
  selector: 'info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnInit {
  public recordsAmount = 0;
  public temperature: Temperature;
  public pressure: Pressure;
  public wind: Wind;

  constructor(private basic: BasicService) {}

  ngOnInit() {
    this.basic.get((api: BasicApi) => {
      this.recordsAmount = api.count;

      this.temperature = api.temperature;
      this.pressure = api.barometer;
      this.wind = api.wind;
    });
  }
}
