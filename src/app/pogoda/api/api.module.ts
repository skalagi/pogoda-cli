import { NgModule } from '@angular/core';
import { BasicService } from "./basic/api.service";
import { SentencesService } from "./sentences/sentences.service";
import { DayChartService } from "./charts/day-chart.service";
import { DayRecordsService } from "./records/day-records.service";

@NgModule({
  providers: [
    BasicService,
    SentencesService,
    DayChartService,
    DayRecordsService
  ],
})
export class ApiModule { }
