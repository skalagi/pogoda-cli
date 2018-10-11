import { Component, OnInit } from '@angular/core';
import { ForecastService } from "../../../api/forecast/forecast.service";
import { SimpleForecast } from "../../../api/forecast/forecast.interface";

@Component({
  selector: 'simple-forecast',
  templateUrl: './simple-forecast.component.html',
  styleUrls: ['./simple-forecast.component.css']
})
export class SimpleForecastComponent implements OnInit {
  constructor(private api: ForecastService) {}
  public forecast: SimpleForecast;

  ngOnInit() {
    this.api.get('simple').subscribe((forecast: SimpleForecast) => this.forecast = forecast);
  }
}
