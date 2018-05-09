import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindComponent } from './wind.component';
import { WindDetailsComponent } from './wind-details/wind-details.component';
import { WindGroupComponent } from './wind-group/wind-group.component';
import { PortableValueModule } from '../../portable-value/portable-value.module';
import { ChartsModule } from '../../charts/charts.module';
import { RouterModule } from '@angular/router';
import { RecordsModule } from '../../records/records.module';

@NgModule({
  imports: [
    PortableValueModule,
    RecordsModule,
    ChartsModule,
    RouterModule,
    CommonModule,
  ],
  declarations: [WindComponent, WindDetailsComponent, WindGroupComponent],
  exports: [WindComponent],
})
export class WindModule { }
