import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, BehaviorSubject } from 'rxjs';

import { encodeType, encodeRange, decodeType, decodeRange } from '../charts.helper';
import { ChartQuery } from '../state';
import { SEOService } from 'app/pogoda/seo.service';
import { NgPerfume, PerfumeAfterViewInit } from 'perfume.js/angular';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'report',
  templateUrl: './report.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./report.component.scss']
})
@PerfumeAfterViewInit('ReportComponent')
export class ReportComponent implements OnInit, AfterViewInit {
  types$ = of(['temperatura', 'ciśnienie', 'wilgotność', 'opady', 'wiatr']);
  rangesIndex$ = new BehaviorSubject(null);
  ranges$ = of(['dziś', 'miesiąc', 'rok']);
  typesIndex$ = new BehaviorSubject(null);
  loading$ = this.query.selectLoading();
  error$ = this.query.selectError();
  type$ = new BehaviorSubject(null);

  constructor(
    private route: ActivatedRoute,
    private perfume: NgPerfume,
    private query: ChartQuery,
    private seo: SEOService,
    private router: Router,
    ) { }

  ngAfterViewInit() {}

  decodeRange(range) {
    return decodeRange(range);
  }

  decodeType(type) {
    return decodeType(type);
  }

  change(opts) {
    const { range, type } = opts;
    if (type !== null) {
      this.types$.subscribe(types => {
        this.router.navigate(['/', 'raport', types[type], decodeRange(this.type$.value.range) || 'dziś']);
      });
    }

    if (range !== null) {
      this.ranges$.subscribe(ranges => {
        this.router.navigate(['/', 'raport', decodeType(this.type$.value.type), ranges[range]]);
      });
    }
  }

  tabsRange(range) {
    switch (range) {
      case 'day': return 0;
      case 'month': return 1;
      case 'year': return 2;
    }
  }

  tabsTypes(range) {
    switch (range) {
      case 'temperature': return 0;
      case 'barometer': return 1;
      case 'humidity': return 2;
      case 'rain': return 3;
      case 'wind': return 4;
    }
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
          this.typesIndex$.next(this.tabsTypes(type));
          this.rangesIndex$.next(this.tabsRange(range));

          let seoRange = decodeRange(range);
          let seoType = decodeType(type);
          const title = `${seoRange} ${seoType}`;

          this.seo.title(`Raport ${title}`);
          this.seo.description(`Wykres wyświetlający ${title}`);
        }
      }
    });
  }
}
