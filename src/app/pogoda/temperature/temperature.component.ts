import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { PogodaSkalagiApi, Temperature } from "../api.interface";

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  constructor(private api: ApiService) { }
  public loaded: boolean = false;
  public temperature: Temperature;

  ngOnInit() {
    this.api.update.subscribe((api: PogodaSkalagiApi) => {
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
