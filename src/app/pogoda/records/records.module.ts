import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { MomentModule } from 'ngx-moment';

import { RecordComponent } from './record/record.component';
import { RecordsComponent } from './records/records.component';
import { UnitModule } from '../unit/unit.module';
import { FlexModule } from '@angular/flex-layout/flex';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    MatTabsModule,
    MomentModule,
    UnitModule
  ],
  declarations: [RecordComponent, RecordsComponent],
  exports: [RecordComponent, RecordsComponent]
})
export class RecordsModule {}
