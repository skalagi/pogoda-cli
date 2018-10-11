import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Unit } from '../unit';

@Component({
  selector: 'skalagi-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnitComponent {
  @Input() name: String;
  @Input() unit: Unit;
}
