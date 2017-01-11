import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayRecordsService } from "./day-records.service";
import { DayRecordsComponent } from './day-records/day-records.component';
import { MaterialModule } from "@angular/material";
import { DayRecordComponent } from './day-record/day-record.component';

@NgModule({
  imports: [CommonModule, MaterialModule.forRoot()],
  providers: [DayRecordsService],
  declarations: [DayRecordsComponent, DayRecordComponent],
  exports: [DayRecordsComponent],
})
export class DayRecordsModule { }
