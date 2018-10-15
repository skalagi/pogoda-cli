import { Component, Input } from '@angular/core';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'skalagi-portable-value',
  templateUrl: './portable-value.component.html',
  styleUrls: ['./portable-value.component.scss']
})
export class PortableValueComponent {
  @Input() preText = '';
  @Input() preTip = '';
  @Input() pre = '';

  @Input() value = 0;

  @Input() after = '';
  @Input() afterTip = '';
  @Input() afterText = '';

  @Input() color: string;

  get class() {
    return { tooltip: this.showTooltip, [this.color]: true };
  }

  get showTooltip() {
    return this.value.toString() !== this.roundedValue;
  }

  information(rounded) {
    const { preTip, preText, afterText, pre, value, afterTip, after } = this;
    const message = pre + (rounded ? this.roundedValue : value) + after;

    if (rounded) {
      return preText + message + afterText;
    }

    return preTip + message + afterTip;
  }

  get roundedValue() {
    return formatNumber(this.value, 'en-US', '1.0-2');
  }
}
