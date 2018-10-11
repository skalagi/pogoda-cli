import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortableValueComponent } from './portable-value.component';
import { MatTooltipModule } from '@angular/material';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, MatTooltipModule, FlexModule],
  declarations: [PortableValueComponent],
  exports: [PortableValueComponent],
})
export class PortableValueModule { }
