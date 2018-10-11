import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { PortableValueModule } from '../portable-value/portable-value.module';
import { RecordComponent } from './record/record.component';
import { RecordsComponent } from './records/records.component';
import { UnitModule } from '../unit/unit.module';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    PortableValueModule,
    FlexModule,
    MatTabsModule,
    MomentModule,
    UnitModule
  ],
  declarations: [RecordComponent, RecordsComponent],
  exports: [RecordComponent, RecordsComponent]
})
export class RecordsModule {}
