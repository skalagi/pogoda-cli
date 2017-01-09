import { Routes } from "@angular/router";

import { BasicWeatherComponent } from "../basic-weather/basic-weather.component";
import { TemperatureDetailsComponent } from "../temperature-details/temperature-details.component";

export const pogodaRoutes = [
  { path: '', exact: true, component: BasicWeatherComponent },
  { path: 'temperatura', component: TemperatureDetailsComponent },
];
