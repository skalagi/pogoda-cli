import { Routes } from '@angular/router';

export const pogodaRoutes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './homepage/homepage.module#HomepageModule' },
  { path: 'prognoza', loadChildren: './forecast/forecast.module#ForecastModule' },
  { path: 'pomiary', loadChildren: './basic/basic-weather.module#BasicWeatherModule' },
  { path: 'raport', loadChildren: './charts/charts.module#ChartsModule' },
];
