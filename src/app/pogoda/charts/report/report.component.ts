import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @Input() public dataType = '';
  @Input() public type = '';
  range$ = new BehaviorSubject('day');

  constructor(private route: ActivatedRoute) { }

  changeRange(index) {
    this.range$.next(['day', 'month', 'year'][index]);
  }

  private getType(type) {
    switch (type) {
      case 'temperatura':
      return 'outTemp';

      case 'wilgotność':
      return 'outHumidity';

      case 'podmuchy wiatru':
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
        this.type = this.getType(type);
        this.dataType = type;
      }
    });
  }
}
