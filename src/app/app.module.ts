import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';

import localePl from '@angular/common/locales/pl';

registerLocaleData(localePl, 'pl');

import { PogodaModule } from './pogoda/pogoda.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    PogodaModule,
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pl' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
