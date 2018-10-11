import { Component, Input } from '@angular/core';
import { Unit } from "../api/unit.interface";

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.scss']
})
export class ThermometerComponent {
  @Input() temperature: Unit;
}
