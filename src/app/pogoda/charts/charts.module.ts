import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-highcharts';
import { ChartComponent } from './chart/chart.component';
import { ReportComponent } from './report/report.component';
import { MatCardModule, MatTabsModule, MatProgressSpinnerModule } from '@angular/material';
import { ApiModule } from '../api/api.module';

const Highcharts = require('../../../../node_modules/highcharts/highcharts');
const HighchartsMore = require('../../../../node_modules/highcharts/highcharts-more');

HighchartsMore(Highcharts);

@NgModule({
  imports: [CommonModule, ChartModule, MatCardModule, MatTabsModule, ApiModule, MatProgressSpinnerModule],
  declarations: [ChartComponent, ReportComponent],
  exports: [ChartComponent, ReportComponent],
})
export class ChartsModule { }
