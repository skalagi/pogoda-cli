import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../api.service";
import { PogodaSkalagiApi, Temperature } from "../../../api.interface";

@Component({
  selector: 'app-temperature-details',
  templateUrl: './temperature-details.component.html',
  styleUrls: ['./temperature-details.component.css']
})
export class TemperatureDetailsComponent implements OnInit {
  constructor(private api: ApiService) { }
  public temperature: Temperature;
  public loaded: boolean = false;

  ngOnInit() {
    this.api.get(({ temperature }: PogodaSkalagiApi) => {
      this.temperature = temperature;
      this.loaded = true;
    });
  }
}
