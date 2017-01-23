import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';
import { MaterialModule } from "@angular/material";
import { ApiModule } from "../../api/api.module";
import { SimpleForecastComponent } from './simple-forecast/simple-forecast.component';
import { TxtForecastComponent } from './txt-forecast/txt-forecast.component';

@NgModule({
  imports: [
    MaterialModule.forRoot(),
    CommonModule,
    ApiModule,
  ],
  declarations: [ForecastComponent, SimpleForecastComponent, TxtForecastComponent],
  exports: [ForecastComponent],
})
export class ForecastModule { }
