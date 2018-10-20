import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PogodaComponent } from './pogoda/pogoda.component';
import { RouterModule } from '@angular/router';
import { pogodaRoutes } from './pogoda.routes';
import { HeaderModule } from './pogoda/header/header.module';
import { SentencesModule } from './sentences/sentences.module';
import { FooterModule } from './pogoda/footer/footer.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(pogodaRoutes),
    FlexLayoutModule,
    HeaderModule,
    FooterModule,
    SentencesModule,
  ],

  declarations: [
    PogodaComponent,
  ],

  exports: [PogodaComponent],
})
export class PogodaModule { }
