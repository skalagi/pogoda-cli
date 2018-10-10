import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { PortableValueModule } from '../portable-value/portable-value.module';
import { RecordComponent } from './record/record.component';
import { RecordsComponent } from './records/records.component';

@NgModule({
  imports: [CommonModule, PortableValueModule, MatTabsModule, MomentModule],
  declarations: [RecordComponent, RecordsComponent],
  exports: [RecordComponent, RecordsComponent],
})
export class RecordsModule { }
