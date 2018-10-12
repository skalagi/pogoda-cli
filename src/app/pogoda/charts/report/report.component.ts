import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, of, combineLatest } from 'rxjs';

import { encodeType, encodeRange, decodeType, decodeRange } from '../charts.helper';
import { ChartService } from '../state';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  type$ = new BehaviorSubject({ range: 'day', type: 'temperature' });
  types$ = of(['temperatura', 'ciśnienie', 'wilgotność', 'opady', 'wiatr']);
  ranges$ = of(['dziś', 'miesiąc', 'rok']);

  constructor(private route: ActivatedRoute, private charts: ChartService) { }

  decodeRange(range) {
    return decodeRange(range);
  }

  decodeType(type) {
    return decodeType(type);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((data) => {
      const type = data.get('type');
      const range = data.get('range');

      if (type) {
        const _type = encodeType(type);
        this.charts.preload(_type);

        if (range) {
          this.type$.next({ range: encodeRange(range), type: _type });
        }
      }
    });
  }
}
