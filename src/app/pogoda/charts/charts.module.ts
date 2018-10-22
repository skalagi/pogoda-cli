import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './chart/chart.component';
import { ReportComponent } from './report/report.component';
import {
  MatCardModule,
  MatTabsModule,
  MatProgressBarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfumeModule } from 'perfume.js/angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'temperatura/dziś' },
      { path: ':type', redirectTo: ':type/dziś' },
      { path: ':type/:range', component: ReportComponent }
    ]),
    MatProgressBarModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    PerfumeModule,
    HighchartsChartModule,
  ],
  declarations: [ChartComponent, ReportComponent],
  exports: [ChartComponent, ReportComponent]
})
export class ChartsModule {}
