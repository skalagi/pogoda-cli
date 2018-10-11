import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule, Highcharts } from 'angular-highcharts';
import { ChartComponent } from './chart/chart.component';
import { ReportComponent } from './report/report.component';
import {
  MatCardModule,
  MatTabsModule,
  MatProgressBarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/accessibility')(Highcharts);

Highcharts.setOptions({
  lang: {
    months: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień',
    'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień',
    'Październik', 'Listopad', 'Grudzień'],
    shortMonths: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
    weekdays: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
  }
});

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':type', component: ReportComponent },
    ]),
    MatProgressBarModule,
    MatCardModule,
    MatTabsModule,
    ChartModule,
  ],
  declarations: [ChartComponent, ReportComponent],
  exports: [ChartComponent, ReportComponent]
})
export class ChartsModule {}
