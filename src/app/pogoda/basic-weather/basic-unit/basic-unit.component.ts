import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Unit } from 'app/pogoda/unit/unit';

@Component({
  selector: 'skalagi-basic-unit',
  templateUrl: './basic-unit.component.html',
  styleUrls: ['./basic-unit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicUnitComponent implements OnInit {
  @Input() unit: Unit;

  constructor() { }

  ngOnInit() {
  }

}
