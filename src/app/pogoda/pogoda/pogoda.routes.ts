import { TemperatureDetailsComponent } from '../basic-weather/temperature/temperature-details/temperature-details.component';
import { PressureDetailsComponent } from '../basic-weather/pressure/pressure-details/pressure-details.component';
import { HumidityDetailsComponent } from '../basic-weather/humidity/humidity-details/humidity-details.component';
import { RainDetailsComponent } from '../basic-weather/rain/rain-details/rain-details.component';
import { WindDetailsComponent } from '../basic-weather/wind/wind-details/wind-details.component';
import { BasicWeatherComponent } from '../basic-weather/basic-weather.component';
import { Routes } from '@angular/router';

export const pogodaRoutes: Routes = [
  { path: '', pathMatch: 'full', component: BasicWeatherComponent },
  /*
  { path: 'temperatura', component: TemperatureDetailsComponent },
  { path: 'wilgotnosc', component: HumidityDetailsComponent },
  { path: 'cisnienie', component: PressureDetailsComponent },
  { path: 'opady', component: RainDetailsComponent },
  { path: 'powiewy', component: WindDetailsComponent },*/
];
