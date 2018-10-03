import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PogodaComponent } from './pogoda/pogoda.component';
import { HeaderComponent } from './header/header.component';
import { UpdateTimerComponent } from './update-timer/update-timer.component';
import { SentencesComponent } from './sentences/sentences.component';
import { PortableValueModule } from './portable-value/portable-value.module';
import { BasicWeatherModule } from './basic-weather/basic-weather.module';
import { RouterModule } from '@angular/router';
import { pogodaRoutes } from './pogoda/pogoda.routes';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { HeaderModule } from './header/header.module';
import { SentencesModule } from './sentences/sentences.module';

@NgModule({
  exports: [PogodaComponent],
  imports: [
    RouterModule.forRoot(pogodaRoutes),
    PortableValueModule,
    HeaderModule,
    SentencesModule,
    BasicWeatherModule,
    CommonModule,
  ],

  declarations: [
    PogodaComponent,
  ],
})
export class PogodaModule { }
