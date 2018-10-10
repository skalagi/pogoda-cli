import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PortableValueModule } from '../portable-value/portable-value.module';
import { TemperatureModule } from './temperature/temperature.module';
import { ForecastModule } from './forecast/forecast.module';
import { RecordsModule } from '../records/records.module';

import { BasicWeatherComponent } from './basic-weather.component';
import { MatCardModule, MatIconModule, MatProgressSpinnerModule, MatTabsModule, MatButtonModule } from '@angular/material';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ForecastModule,
    PortableValueModule,
    HttpClientModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,

    FlexLayoutModule,
    RecordsModule,
  ],

  declarations: [
    BasicWeatherComponent,
    BasicCardComponent,
  ],

  exports: [BasicWeatherComponent],
})
export class BasicWeatherModule { }
