import { NgModule } from '@angular/core';

import { SentencesService } from './sentences/sentences.service';
import { ForecastService } from './forecast/forecast.service';
import { DayChartService } from './charts/day-chart.service';
import { RecordsService } from './records/records.service';
import { BasicService } from './basic/basic.service';

@NgModule({
  providers: [
    SentencesService,
    ForecastService,
    DayChartService,
    RecordsService,
    BasicService,
  ],
})
export class ApiModule { }
