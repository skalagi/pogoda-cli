import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitComponent } from './unit/unit.component';
import { MatIconModule, MatTooltipModule } from '@angular/material';
import { PortableValueComponent } from './portable-value/portable-value.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  declarations: [UnitComponent, PortableValueComponent],
  exports: [UnitComponent, PortableValueComponent]
})
export class UnitModule { }
