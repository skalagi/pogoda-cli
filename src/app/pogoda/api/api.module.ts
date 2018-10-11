import { NgModule } from '@angular/core';

import { SentencesService } from './sentences/sentences.service';
import { ForecastService } from './forecast/forecast.service';
import { BasicService } from './basic/basic.service';

@NgModule({
  providers: [
    SentencesService,
    ForecastService,
    BasicService,
  ],
})
export class ApiModule { }
