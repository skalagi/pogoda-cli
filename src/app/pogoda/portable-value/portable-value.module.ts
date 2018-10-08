import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortableValueComponent } from './portable-value.component';
import { MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatTooltipModule],
  declarations: [PortableValueComponent],
  exports: [PortableValueComponent],
})
export class PortableValueModule { }
