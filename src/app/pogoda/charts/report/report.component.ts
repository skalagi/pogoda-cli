import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, BehaviorSubject } from 'rxjs';

import { encodeType, encodeRange, decodeType, decodeRange } from '../charts.helper';
import { ChartService, ChartQuery } from '../state';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  types$ = of(['temperatura', 'ciśnienie', 'wilgotność', 'opady', 'wiatr']);
  ranges$ = of(['dziś', 'miesiąc', 'rok']);
  loading$ = this.query.selectLoading();
  error$ = this.query.selectError();
  type$ = new BehaviorSubject(null);

  constructor(private route: ActivatedRoute, private query: ChartQuery) { }

  decodeRange(range) {
    return decodeRange(range);
  }

  decodeType(type) {
    return decodeType(type);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((data) => {
      const _range = data.get('range');
      const _type = data.get('type');

      if (_type) {
        const type = encodeType(_type);

        if (_range) {
          const range = encodeRange(_range);
          this.type$.next({ range, type });
        }
      }
    });
  }
}
