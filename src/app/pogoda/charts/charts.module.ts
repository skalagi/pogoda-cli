import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { ChartComponent } from './chart/chart.component';
import { ReportComponent } from './report/report.component';
import {
  MatCardModule,
  MatTabsModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { ApiModule } from '../api/api.module';
import { RouterModule } from '@angular/router';
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
      { path: '', component: ReportComponent },
    ]),
    ApiModule,
    MatProgressSpinnerModule
  ],
  declarations: [ChartComponent, ReportComponent],
  exports: [ChartComponent, ReportComponent]
})
export class ChartsModule {}
