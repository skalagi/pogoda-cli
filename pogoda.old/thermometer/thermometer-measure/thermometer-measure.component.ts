import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Unit } from "../../api/unit.interface";

export interface Line {
  bold: boolean;
  value: number;
}

@Component({
  selector: 'app-thermometer-measure',
  templateUrl: './thermometer-measure.component.html',
  styleUrls: ['./thermometer-measure.component.scss']
})
export class ThermometerMeasureComponent implements OnInit {
  constructor(private host: ElementRef) { }
  @Input() public temperature: Unit;
  public lines: Line[];

  ngOnInit() {
    this.generate();
    setTimeout(() => this.generate(), 300);
  }

  get height() {
    return `${ Math.abs(this.temperature.value * 9) }px`;
  }

  generate() {
    const { nativeElement: { clientHeight } } = this.host;
    const amount = Math.round(clientHeight / 9);

    this.lines = [];
    for (let i = amount; i--;) {
      this.lines.push({ bold: (i % 5 === 0), value: i  });
    }
  }

}
