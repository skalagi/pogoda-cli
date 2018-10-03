import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatureComponent } from './temperature.component';
import { TemperatureDetailsComponent } from './temperature-details/temperature-details.component';
import { ThermometerModule } from '../../thermometer/thermometer.module';
import { PortableValueModule } from '../../portable-value/portable-value.module';
import { RecordsModule } from '../../records/records.module';
import { ChartsModule } from '../../charts/charts.module';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatIconModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    PortableValueModule,
    ThermometerModule,
    RecordsModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    RouterModule,
    ChartsModule,
    CommonModule,
  ],

  declarations: [TemperatureComponent, TemperatureDetailsComponent],
  exports: [TemperatureComponent],
})
export class TemperatureModule { }
