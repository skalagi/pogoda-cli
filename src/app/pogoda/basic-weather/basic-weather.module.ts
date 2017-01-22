import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicWeatherComponent } from "./basic-weather.component";
import { RainComponent } from "./rain/rain.component";
import { PressureComponent } from "./pressure/pressure.component";
import { HumidityComponent } from "./humidity/humidity.component";
import { RainDetailsComponent } from "./rain/rain-details/rain-details.component";
import { HumidityDetailsComponent } from "./humidity/humidity-details/humidity-details.component";
import { PressureDetailsComponent } from "./pressure/pressure-details/pressure-details.component";
import { PortableValueModule } from "../portable-value/portable-value.module";
import { MaterialModule } from "@angular/material";
import { RecordsModule } from "../records/records.module";
import { ChartsModule } from "../charts/charts.module";
import { WindModule } from "./wind/wind.module";
import { TemperatureModule } from "./temperature/temperature.module";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule,
    MaterialModule.forRoot(),
    PortableValueModule,
    TemperatureModule,
    RecordsModule,
    CommonModule,
    ChartsModule,
    WindModule
  ],

  declarations: [
    BasicWeatherComponent,
    PressureComponent,
    HumidityComponent,
    RainComponent,
    PressureDetailsComponent,
    HumidityDetailsComponent,
    RainDetailsComponent,
  ],

  exports: [BasicWeatherComponent],
})
export class BasicWeatherModule { }
