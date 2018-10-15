import { Routes } from '@angular/router';

export const pogodaRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pomiary' },
  { path: 'pomiary', loadChildren: './basic/basic-weather.module#BasicWeatherModule' },
  { path: 'raport', loadChildren: './charts/charts.module#ChartsModule' },
];
