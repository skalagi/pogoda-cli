import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';

import localePl from '@angular/common/locales/pl';

registerLocaleData(localePl, 'pl');

import { PogodaModule } from './pogoda/pogoda.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    PogodaModule,
    FormsModule,
    HttpModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pl' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
