import { BasicWeatherComponent } from './basic-weather/basic-weather.component';
import { Routes } from '@angular/router';

export const pogodaRoutes: Routes = [
  { path: '', pathMatch: 'full', component: BasicWeatherComponent },
  { path: 'raport', loadChildren: './charts/charts.module#ChartsModule' },
  /*
  { path: 'temperatura', component: TemperatureDetailsComponent },
  { path: 'wilgotnosc', component: HumidityDetailsComponent },
  { path: 'cisnienie', component: PressureDetailsComponent },
  { path: 'opady', component: RainDetailsComponent },
  { path: 'powiewy', component: WindDetailsComponent },*/
];
