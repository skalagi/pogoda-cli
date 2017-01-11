import { TemperatureDetailsComponent } from "../temperature-details/temperature-details.component";
import { PressureDetailsComponent } from "../pressure-details/pressure-details.component";
import { HumidityDetailsComponent } from "../humidity-details/humidity-details.component";
import { RainDetailsComponent } from "../rain-details/rain-details.component";
import { WindDetailsComponent } from "../wind-details/wind-details.component";
import { BasicWeatherComponent } from "../basic-weather/basic-weather.component";

export const pogodaRoutes = [
  { path: '', exact: true, component: BasicWeatherComponent },
  { path: 'temperatura', component: TemperatureDetailsComponent },
  { path: 'wilgotnosc', component: HumidityDetailsComponent },
  { path: 'cisnienie', component: PressureDetailsComponent },
  { path: 'opady', component: RainDetailsComponent },
  { path: 'wiatr', component: WindDetailsComponent },
];
