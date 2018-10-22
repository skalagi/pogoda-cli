import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { WidgetModule } from '../widget/widget.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfumeModule } from 'perfume.js/angular';

@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FlexLayoutModule,
    PerfumeModule,
    WidgetModule,
  ],
  declarations: [HomepageComponent]
})
export class HomepageModule { }
