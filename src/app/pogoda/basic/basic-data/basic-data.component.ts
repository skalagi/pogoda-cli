import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { slideTrigger } from 'app/pogoda/pogoda.animation';

@Component({
  selector: 'skalagi-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.scss'],
  animations: [slideTrigger],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicDataComponent {
  @Input() basic;
  @Input() title;

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
}
