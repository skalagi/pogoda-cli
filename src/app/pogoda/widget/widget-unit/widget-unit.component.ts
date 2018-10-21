import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'skalagi-widget-unit',
  templateUrl: './widget-unit.component.html',
  styleUrls: ['./widget-unit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetUnitComponent {
  @Input() title;
  @Input() unit;

  units(unit) {
    if (unit === null) {
      return '';
    }

    return unit.units;
  }

  value(unit) {
    if (unit === null || unit.value === null) {
      return '-';
    }

    return unit.value;
  }
}
