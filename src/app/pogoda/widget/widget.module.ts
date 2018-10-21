import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget/widget.component';
import { WidgetUnitComponent } from './widget-unit/widget-unit.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [WidgetComponent, WidgetUnitComponent],
  exports: [WidgetComponent]
})
export class WidgetModule { }
