import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thermometer-sensor-value',
  templateUrl: './thermometer-sensor-value.component.html',
  styleUrls: ['./thermometer-sensor-value.component.scss']
})
export class ThermometerSensorValueComponent{
  @Input() temperature;
  @Input() unit;
}
