import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PogodaComponent } from './pogoda/pogoda.component';
import { ApiService } from "./api.service";
import { MaterialModule } from "@angular/material";
import { TemperatureComponent } from './temperature/temperature.component';
import { HeaderComponent } from './header/header.component';
import { UpdateTimerComponent } from './update-timer/update-timer.component';
import { WindComponent } from './wind/wind.component';
import { PressureComponent } from './pressure/pressure.component';
import { HumidityComponent } from './humidity/humidity.component';
import { RainComponent } from './rain/rain.component';
import { SentencesComponent } from './sentences/sentences.component';
import { SentencesService } from "./sentences/sentences.service";

@NgModule({
  imports: [CommonModule, MaterialModule.forRoot()],
  declarations: [PogodaComponent, TemperatureComponent, HeaderComponent, UpdateTimerComponent, WindComponent, PressureComponent, HumidityComponent, RainComponent, SentencesComponent],
  exports: [PogodaComponent],
  providers: [ApiService, SentencesService],
})
export class PogodaModule { }
