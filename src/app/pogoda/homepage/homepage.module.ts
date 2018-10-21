import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule,
    WidgetModule,
  ],
  declarations: [HomepageComponent]
})
export class HomepageModule { }
