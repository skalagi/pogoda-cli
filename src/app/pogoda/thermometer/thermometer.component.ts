import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.scss']
})
export class ThermometerComponent {
  @Input('value') temperature: number;
  @Input('unit') unit: string;
  public lines: number[];

  constructor() {
    this.lines = (new Array(51)).map((x, i) => i);
  }
}
