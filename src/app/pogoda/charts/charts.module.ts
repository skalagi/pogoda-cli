import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from "angular2-highcharts";
import { ChartComponent } from "./chart/chart.component";
import { MaterialModule } from "@angular/material";
import { ReportComponent } from './report/report.component';

const Highcharts = require('../../../../node_modules/highcharts/highcharts');
const HighchartsMore = require('../../../../node_modules/highcharts/highcharts-more');

HighchartsMore(Highcharts);

@NgModule({
  imports: [CommonModule, ChartModule, MaterialModule],
  declarations: [ChartComponent, ReportComponent],
  exports: [ChartComponent, ReportComponent],
})
export class ChartsModule { }
