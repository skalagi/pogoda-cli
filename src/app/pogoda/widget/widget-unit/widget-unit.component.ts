import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'skalagi-widget-unit',
  templateUrl: './widget-unit.component.html',
  styleUrls: ['./widget-unit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetUnitComponent {
  @Input() unit;
}
