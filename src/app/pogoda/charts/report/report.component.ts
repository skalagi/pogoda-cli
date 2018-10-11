import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ChartService } from '../state';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  range$ = new BehaviorSubject('day');
  dataType = '';
  type = '';

  constructor(private route: ActivatedRoute, private charts: ChartService) { }

  changeRange(index) {
    this.range$.next(['day', 'month', 'year'][index]);
  }

  private getType(type) {
    switch (type) {
      case 'temperatura':
      return 'outTemp';

      case 'wilgotność':
      return 'outHumidity';

      case 'wiatr':
      return 'windGust';

      case 'opady':
      return 'rain';

      case 'ciśnienie':
      return 'barometer';
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe((data) => {
      const type = data.get('type');

      if (type) {
        const _type = this.getType(type);

        this.charts.preload(_type);
        this.dataType = _type;
        this.type = type;
      }
    });
  }
}
