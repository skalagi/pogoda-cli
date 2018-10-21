import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PogodaComponent } from './pogoda/pogoda.component';
import { RouterModule } from '@angular/router';
import { pogodaRoutes } from './pogoda.routes';
import { HeaderModule } from './pogoda/header/header.module';
import { SentencesModule } from './sentences/sentences.module';
import { FooterModule } from './pogoda/footer/footer.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(pogodaRoutes),
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    SentencesModule,
    HeaderModule,
    FooterModule,
  ],

  declarations: [
    PogodaComponent,
  ],

  exports: [PogodaComponent],
})
export class PogodaModule { }
