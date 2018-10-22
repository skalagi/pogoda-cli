import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { PerfumeModule } from 'perfume.js/angular';

import localePl from '@angular/common/locales/pl';

registerLocaleData(localePl, 'pl');

import { PogodaModule } from './pogoda/pogoda.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PerfumeModule.forRoot({
      firstContentfulPaint: true,
      firstInputDelay: true,
    }),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    PogodaModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: false }),
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pl' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
