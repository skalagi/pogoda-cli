import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BasicWeatherQuery } from 'app/pogoda/basic/state';

@Component({
  selector: 'skalagi-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent implements OnInit {
  temperature$;
  humidity$;
  presure$;
  wind$;
  rain$;

  constructor(private query: BasicWeatherQuery) { }

  ngOnInit() {
    this.temperature$ = this.query.basic('temperature');
    this.humidity$ = this.query.basic('humidity');
    this.presure$ = this.query.basic('barometer');
    this.wind$ = this.query.basic('wind');
    this.rain$ = this.query.basic('rain');
  }

}
