import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'skalagi-widget-unit-value',
  templateUrl: './widget-unit-value.component.html',
  styleUrls: ['./widget-unit-value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetUnitValueComponent {
  @Input() description;
  @Input() trend;
  @Input() unit;
  @Input() icon;

  emptyValue(unit) {
    return unit === null || unit === undefined || unit.value === null || unit.value === 0;
  }

  units(unit) {
    if (this.emptyValue(unit)) {
      return '';
    }

    return unit.units;
  }

  value(unit) {
    if (this.emptyValue(unit)) {
      return '-';
    }

    return unit.value;
  }
}
