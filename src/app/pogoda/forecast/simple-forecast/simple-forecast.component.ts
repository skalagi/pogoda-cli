import { Component, OnInit, Input } from '@angular/core';
import { Simpleforecast } from '../state';

@Component({
  selector: 'skalagi-simple-forecast',
  templateUrl: './simple-forecast.component.html',
  styleUrls: ['./simple-forecast.component.scss']
})
export class SimpleForecastComponent implements OnInit {
  @Input() forecast: Simpleforecast;

  constructor() { }

  ngOnInit() {
  }

}
