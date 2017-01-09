import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "@angular/material";
import { MomentModule } from 'angular2-moment';

import { PogodaComponent } from './pogoda/pogoda.component';
import { ApiService } from "./api.service";
import { TemperatureComponent } from './temperature/temperature.component';
import { HeaderComponent } from './header/header.component';
import { UpdateTimerComponent } from './update-timer/update-timer.component';
import { WindComponent } from './wind/wind.component';
import { PressureComponent } from './pressure/pressure.component';
import { HumidityComponent } from './humidity/humidity.component';
import { RainComponent } from './rain/rain.component';
import { SentencesComponent } from './sentences/sentences.component';
import { SentencesService } from "./sentences/sentences.service";
import { ChartsComponent } from './charts/charts.component';
import { ThermometerComponent } from './thermometer/thermometer.component';
import { TemperatureDetailsComponent } from './temperature-details/temperature-details.component';
import { RouterModule } from "@angular/router";
import { pogodaRoutes } from "./pogoda/pogoda.routes";
import { BasicWeatherComponent } from './basic-weather/basic-weather.component';
import { DayChartComponent } from './day-chart/day-chart.component';
import { ChartModule } from "angular2-highcharts";
import { DayChartService } from "./day-chart/day-chart.service";

@NgModule({
  exports: [PogodaComponent],
  providers: [ApiService, SentencesService, DayChartService],

  imports: [
    RouterModule.forRoot(pogodaRoutes),
    MaterialModule.forRoot(),
    CommonModule,
    MomentModule,
    ChartModule,
  ],

  declarations: [
    PogodaComponent,
    TemperatureComponent,
    HeaderComponent,
    UpdateTimerComponent,
    WindComponent,
    PressureComponent,
    HumidityComponent,
    RainComponent,
    SentencesComponent,
    ChartsComponent,
    ThermometerComponent,
    TemperatureDetailsComponent,
    BasicWeatherComponent,
    DayChartComponent
  ],
})
export class PogodaModule { }
