import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ForecastQuery, ForecastState } from '../state';
import { Observable } from 'rxjs';

@Component({
  selector: 'skalagi-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastComponent implements OnInit {
  forecast$: Observable<ForecastState>;

  constructor(private query: ForecastQuery) { }

  ngOnInit() {
    this.forecast$ = this.query.select();
  }
}
