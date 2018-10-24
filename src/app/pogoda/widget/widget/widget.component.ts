import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BasicWeatherQuery } from 'app/pogoda/basic/state';
import { ForecastQuery } from 'app/pogoda/forecast/state';

@Component({
  selector: 'skalagi-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent implements OnInit {
  forecast$;
  basic$;

  constructor(private query: BasicWeatherQuery, private forecast: ForecastQuery) { }

  ngOnInit() {
    this.basic$ = this.query.select();
    this.forecast$ = this.forecast.select();
  }

}
