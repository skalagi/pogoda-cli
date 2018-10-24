import { Component, OnInit, Input } from '@angular/core';
import { TxtForecast } from '../state';

@Component({
  selector: 'skalagi-txt-forecast',
  templateUrl: './txt-forecast.component.html',
  styleUrls: ['./txt-forecast.component.scss']
})
export class TxtForecastComponent implements OnInit {
  @Input() forecast: TxtForecast;

  constructor() { }

  ngOnInit() {
  }

}
