import './polyfills.ts';
import 'moment/min/locales';

import * as moment from 'moment';
moment.locale('pl-pl');

import * as Highcharts from 'highcharts';
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/accessibility')(Highcharts);
require('highcharts/modules/no-data-to-display')(Highcharts);

Highcharts.setOptions({
  lang: {
    noData: 'BRAK DANYCH',
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
