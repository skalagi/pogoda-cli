import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayRecordsService } from "./day-records.service";
import { DayRecordsComponent } from './day-records/day-records.component';

@NgModule({
  imports: [CommonModule],
  providers: [DayRecordsService],
  declarations: [DayRecordsComponent],
  exports: [DayRecordsComponent],
})
export class DayRecordsModule { }
