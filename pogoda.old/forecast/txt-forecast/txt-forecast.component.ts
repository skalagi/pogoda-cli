import { Component, OnInit } from '@angular/core';
import { ForecastService } from "../../../api/forecast/forecast.service";
import { TXT_Forecast } from "../../../api/forecast/forecast.interface";

@Component({
  selector: 'txt-forecast',
  templateUrl: './txt-forecast.component.html',
  styleUrls: ['./txt-forecast.component.css']
})
export class TxtForecastComponent implements OnInit {
  constructor(private api: ForecastService) { }
  public forecast: TXT_Forecast;

  ngOnInit() {
    this.api.get('txt').subscribe((forecast: TXT_Forecast) => this.forecast = forecast);
  }

}
