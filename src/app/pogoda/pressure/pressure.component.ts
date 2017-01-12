import { Component, OnInit } from '@angular/core';
import { Pressure, PogodaSkalagiApi } from "../api.interface";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.scss']
})
export class PressureComponent implements OnInit {
  constructor(private api: ApiService) { }
  public loaded: boolean = false;
  public pressure: Pressure;

  ngOnInit() {
    this.api.get((api: PogodaSkalagiApi) => {
      this.pressure = api.barometer;
      this.loaded = true;
    });
  }
}
