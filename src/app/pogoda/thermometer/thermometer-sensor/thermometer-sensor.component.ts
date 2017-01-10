import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thermometer-sensor',
  templateUrl: './thermometer-sensor.component.html',
  styleUrls: ['./thermometer-sensor.component.scss']
})
export class ThermometerSensorComponent {
  @Input() temperature;

  get height() {
    return `${Math.abs(this.temperature * 1.9) + 18}%`;
  }
}
