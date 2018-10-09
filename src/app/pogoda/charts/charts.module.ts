import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { ChartComponent } from './chart/chart.component';
import { ReportComponent } from './report/report.component';
import {
  MatCardModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule
} from '@angular/material';
import { ApiModule } from '../api/api.module';
import { RouterModule } from '@angular/router';

import * as Highcharts from 'highcharts'
require('highcharts/highcharts-more')(Highcharts);

/*
const Highcharts = require('../../../../node_modules/highcharts/highcharts');
const HighchartsMore = require('../../../../node_modules/highcharts/highcharts-more');

HighchartsMore(Highcharts);
*/
@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    MatCardModule,
    MatTabsModule,
    RouterModule.forChild([
      { path: ':type', component: ReportComponent },
    ]),
    ApiModule,
    MatProgressBarModule,
  ],
  declarations: [ChartComponent, ReportComponent],
  exports: [ChartComponent, ReportComponent]
})
export class ChartsModule {}
