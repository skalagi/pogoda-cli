import './polyfills.ts';
import 'moment/min/locales';

import * as moment from 'moment';
moment.locale('pl-pl');

import { Highcharts } from 'angular-highcharts';
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/accessibility')(Highcharts);

Highcharts.setOptions({
  lang: {
    months: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień',
    'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień',
    'Październik', 'Listopad', 'Grudzień'],
    shortMonths: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
    weekdays: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
  }
});

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
