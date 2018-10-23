import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';

import { BasicWeatherComponent } from './basic-weather.component';
import { MatIconModule, MatProgressSpinnerModule, MatTabsModule,
   MatButtonModule } from '@angular/material';
import { BasicCardComponent } from './basic-card/basic-card.component';

import { UnitModule } from '../unit/unit.module';
import { BasicDataComponent } from './basic-data/basic-data.component';
import { BasicChartComponent } from './basic-chart/basic-chart.component';
import { PerfumeModule } from 'perfume.js/angular';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BasicWeatherComponent }]),
    HighchartsChartModule,
    PerfumeModule,

    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    UnitModule,

    FlexLayoutModule,
  ],

  declarations: [
    BasicWeatherComponent,
    BasicCardComponent,
    BasicDataComponent,
    BasicChartComponent,
  ],

  exports: [BasicWeatherComponent],
})
export class BasicWeatherModule { }
