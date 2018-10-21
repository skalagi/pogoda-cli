import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BasicWeatherQuery } from 'app/pogoda/basic/state';

@Component({
  selector: 'skalagi-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent implements OnInit {
  basic$;

  constructor(private query: BasicWeatherQuery) { }

  ngOnInit() {
    this.basic$ = this.query.select();
  }

}
