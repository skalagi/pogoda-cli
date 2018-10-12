import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'skalagi-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicDataComponent implements OnInit {
  @Input() basic;

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

  constructor() { }

  ngOnInit() {
  }

}
