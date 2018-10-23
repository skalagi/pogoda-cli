import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget/widget.component';
import { WidgetUnitComponent } from './widget-unit/widget-unit.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WidgetUnitValueComponent } from './widget-unit-value/widget-unit-value.component';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatIconModule,
  ],
  declarations: [WidgetComponent, WidgetUnitComponent, WidgetUnitValueComponent],
  exports: [WidgetComponent]
})
export class WidgetModule { }
