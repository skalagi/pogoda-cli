import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastComponent } from './forecast/forecast.component';
import { TxtForecastComponent } from './txt-forecast/txt-forecast.component';
import { SimpleForecastComponent } from './simple-forecast/simple-forecast.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ForecastRoutingModule,
  ],
  declarations: [ForecastComponent, TxtForecastComponent, SimpleForecastComponent]
})
export class ForecastModule { }
