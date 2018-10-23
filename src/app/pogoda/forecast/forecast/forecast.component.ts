import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'skalagi-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
