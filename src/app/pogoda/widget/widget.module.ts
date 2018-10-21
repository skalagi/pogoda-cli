import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WidgetComponent],
  exports: [WidgetComponent]
})
export class WidgetModule { }
