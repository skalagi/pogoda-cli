import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitComponent } from './unit/unit.component';
import { FlexModule } from '@angular/flex-layout';
import { MatIconModule, MatTooltipModule } from '@angular/material';
import { PortableValueComponent } from './portable-value/portable-value.component';

@NgModule({
  imports: [
    FlexModule,
    CommonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  declarations: [UnitComponent, PortableValueComponent],
  exports: [UnitComponent, PortableValueComponent]
})
export class UnitModule { }
