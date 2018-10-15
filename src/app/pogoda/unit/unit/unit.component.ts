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
  @Input() color;
  @Input() dir;
  @Input() icon = 'flare';
  @Input() name: String;
  @Input() unit: Unit;

  get transform() {
    return `rotate(${ this.dir && this.dir.value ? this.dir.value + 180 : 0  }deg)`;
    // return `rotate(${ wind + 270 }deg)`;
  }

  get preTip() {
    if (this.icon && this.unit && this.unit.name) {
      return this.unit.name + ' wynosi: ';
    }

    return '';
  }
}
