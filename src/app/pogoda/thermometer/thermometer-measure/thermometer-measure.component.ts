import { Component, OnInit, ElementRef } from '@angular/core';

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
  public lines: Line[] = [];

  ngOnInit() {
    const { nativeElement: { clientHeight } } = this.host;
    const amount = Math.round(clientHeight / 9);

    for (let i = amount; i--;) {
      this.lines.push({ bold: (i % 5 === 0), value: i  });
    }
  }
}
