import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PogodaComponent } from './pogoda/pogoda.component';
import { BasicWeatherModule } from './basic-weather/basic-weather.module';
import { RouterModule } from '@angular/router';
import { pogodaRoutes } from './pogoda.routes';
import { HeaderModule } from './header/header.module';
import { SentencesModule } from './sentences/sentences.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(pogodaRoutes),
    HeaderModule,
    SentencesModule,
    BasicWeatherModule,
  ],

  declarations: [
    PogodaComponent,
  ],

  exports: [PogodaComponent],
})
export class PogodaModule { }
