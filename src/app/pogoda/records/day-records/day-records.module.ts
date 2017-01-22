import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayRecordsComponent } from './day-records/day-records.component';
import { MaterialModule } from "@angular/material";
import { DayRecordComponent } from './day-record/day-record.component';
import { PortableValueModule } from "../../portable-value/portable-value.module";

@NgModule({
  imports: [CommonModule, MaterialModule.forRoot(), PortableValueModule],
  declarations: [DayRecordsComponent, DayRecordComponent],
  exports: [DayRecordComponent],
})
export class DayRecordsModule { }
