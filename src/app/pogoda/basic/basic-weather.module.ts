import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';

import { RecordsModule } from '../records/records.module';

import { BasicWeatherComponent } from './basic-weather.component';
import { MatCardModule, MatIconModule, MatProgressSpinnerModule, MatTabsModule, MatButtonModule } from '@angular/material';
import { BasicCardComponent } from './basic-card/basic-card.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { UnitModule } from '../unit/unit.module';
import { BasicDataComponent } from './basic-data/basic-data.component';
import { BasicChartComponent } from './basic-chart/basic-chart.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BasicWeatherComponent }]),
    HighchartsChartModule,

    DragDropModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    UnitModule,

    FlexLayoutModule,
    RecordsModule,
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
