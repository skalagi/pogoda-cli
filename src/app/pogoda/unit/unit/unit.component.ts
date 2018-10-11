import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Unit } from '../unit';

@Component({
  selector: 'skalagi-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnitComponent {
  @Input() after;
  @Input() icon = 'bubble_chart';
  @Input() name: String;
  @Input() unit: Unit;

  get preTip() {
    if (this.icon && this.unit && this.unit.name) {
      return this.unit.name + ' wynosi: ';
    }

    return '';
  }
}
