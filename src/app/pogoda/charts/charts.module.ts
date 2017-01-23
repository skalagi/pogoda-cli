import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from "angular2-highcharts";
import { DayChartComponent } from "./day-chart/day-chart.component";
import { MaterialModule } from "@angular/material";
import { ReportComponent } from './report/report.component';

const Highcharts = require('../../../../node_modules/highcharts/highcharts');
const HighchartsMore = require('../../../../node_modules/highcharts/highcharts-more');

HighchartsMore(Highcharts);

@NgModule({
  imports: [CommonModule, ChartModule, MaterialModule],
  declarations: [DayChartComponent, ReportComponent],
  exports: [DayChartComponent, ReportComponent],
})
export class ChartsModule { }
