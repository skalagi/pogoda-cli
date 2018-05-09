import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortableValueModule } from '../portable-value/portable-value.module';
import { RecordComponent } from './record/record.component';
import { RecordsComponent } from './records/records.component';
import { MomentModule } from 'angular2-moment';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, PortableValueModule, MatTabsModule, MomentModule],
  declarations: [RecordComponent, RecordsComponent],
  exports: [RecordComponent, RecordsComponent],
})
export class RecordsModule { }
