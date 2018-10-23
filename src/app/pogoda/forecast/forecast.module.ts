import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastComponent } from './forecast/forecast.component';

@NgModule({
  imports: [
    CommonModule,
    ForecastRoutingModule
  ],
  declarations: [ForecastComponent]
})
export class ForecastModule { }
