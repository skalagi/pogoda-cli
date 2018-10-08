import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PortableValueModule } from '../portable-value/portable-value.module';
import { TemperatureModule } from './temperature/temperature.module';
import { ForecastModule } from './forecast/forecast.module';
import { RecordsModule } from '../records/records.module';
import { ChartsModule } from '../charts/charts.module';
import { WindModule } from './wind/wind.module';

import { RainComponent } from './rain/rain.component';
import { BasicWeatherComponent } from './basic-weather.component';
import { PressureComponent } from './pressure/pressure.component';
import { HumidityComponent } from './humidity/humidity.component';
import { RainDetailsComponent } from './rain/rain-details/rain-details.component';
import { HumidityDetailsComponent } from './humidity/humidity-details/humidity-details.component';
import { PressureDetailsComponent } from './pressure/pressure-details/pressure-details.component';
import { MatCardModule, MatIconModule, MatProgressSpinnerModule, MatTabsModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    RouterModule,
    PortableValueModule,
    TemperatureModule,
    ForecastModule,
    PortableValueModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,

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
