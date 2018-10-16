import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BasicWeatherQuery } from '../state';
import { slideTrigger } from 'app/pogoda/pogoda.animation';

@Component({
  selector: 'skalagi-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.scss'],
  animations: [slideTrigger],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicDataComponent implements OnInit {
  @Input() basic;
  loading$;

  get trendIcon() {
    if (!this.basic) { return; }
    const { trend: { value: trend } } = this.basic;

    switch (true) {
      case trend > 0:
        return 'arrow_upward';
      case trend < 0:
        return 'arrow_downward';
      default: return;
    }
  }

  constructor(private query: BasicWeatherQuery) { }

  ngOnInit() {
    this.loading$ = this.query.selectLoading();
  }

}
