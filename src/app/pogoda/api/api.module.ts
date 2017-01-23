import { NgModule } from '@angular/core';
import { BasicService } from "./basic/basic.service";
import { SentencesService } from "./sentences/sentences.service";
import { DayChartService } from "./charts/day-chart.service";
import { RecordsService } from "./records/records.service";

@NgModule({
  providers: [
    BasicService,
    SentencesService,
    DayChartService,
    RecordsService
  ],
})
export class ApiModule { }
