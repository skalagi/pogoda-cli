import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BasicWeatherQuery } from 'app/pogoda/basic/state';

@Component({
  selector: 'skalagi-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  error$;
  time$;

  constructor(private query: BasicWeatherQuery) { }

  ngOnInit() {
    this.error$ = this.query.selectError();
    this.time$ = this.query.basic('time');
  }

}
