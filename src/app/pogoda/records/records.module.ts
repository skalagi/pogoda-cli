import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record/record.component';
import { DayRecordsModule } from "./day-records/day-records.module";
import { DayRecordComponent } from "./day-records/day-record/day-record.component";

@NgModule({
  imports: [
    CommonModule,
    DayRecordsModule
  ],
  declarations: [RecordComponent],
  exports: [DayRecordComponent],
})
export class RecordsModule { }
