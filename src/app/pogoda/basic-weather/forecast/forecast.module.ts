import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';
import { ApiModule } from '../../api/api.module';
import { SimpleForecastComponent } from './simple-forecast/simple-forecast.component';
import { TxtForecastComponent } from './txt-forecast/txt-forecast.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    ApiModule,
  ],
  declarations: [ForecastComponent, SimpleForecastComponent, TxtForecastComponent],
  exports: [ForecastComponent],
})
export class ForecastModule { }
