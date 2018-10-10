import { Component, OnInit, Input } from '@angular/core';
import { BasicWeatherQuery } from '../state';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent implements OnInit {
  @Input() title;
  @Input() type;

  basic$;

  repeat(basic) {
    return `repeat(${ basic.value ? 1 : 2 }, 1fr)`;
  }

  constructor(private query: BasicWeatherQuery) {
  }

  ngOnInit() {
    this.basic$ = this.query.basic(this.type);
  }

  trend(basic) {
    if (!basic) { return; }
    const { trend: { value: trend } } = basic;

    switch (true) {
      case trend > 0:
        return 'arrow_upward';
      case trend < 0:
        return 'arrow_downward';
      default: return;
    }
  }
}
