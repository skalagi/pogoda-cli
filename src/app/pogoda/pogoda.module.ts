import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "@angular/material";
import { MomentModule } from 'angular2-moment';

import { PogodaComponent } from './pogoda/pogoda.component';
import { ApiService } from "./api.service";
import { HeaderComponent } from './header/header.component';
import { UpdateTimerComponent } from './update-timer/update-timer.component';
import { SentencesComponent } from './sentences/sentences.component';
import { SentencesService } from "./sentences/sentences.service";
import { PortableValueModule } from "./portable-value/portable-value.module";
import { BasicWeatherModule } from "./basic-weather/basic-weather.module";
import { RouterModule } from "@angular/router";
import { pogodaRoutes } from "./pogoda/pogoda.routes";

@NgModule({
  exports: [PogodaComponent],
  providers: [ApiService, SentencesService],

  imports: [
    RouterModule.forRoot(pogodaRoutes),
    MaterialModule.forRoot(),
    PortableValueModule,
    BasicWeatherModule,
    CommonModule,
    MomentModule,
  ],

  declarations: [
    PogodaComponent,
    HeaderComponent,
    UpdateTimerComponent,
    SentencesComponent,
  ],
})
export class PogodaModule { }
