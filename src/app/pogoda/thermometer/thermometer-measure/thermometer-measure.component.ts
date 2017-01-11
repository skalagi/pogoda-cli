import { Component, OnInit, ElementRef, Input, EventEmitter } from '@angular/core';

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
  public lines: Line[];

  ngOnInit() {
    this.generate();
    setTimeout(() => this.generate(), 300);
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
