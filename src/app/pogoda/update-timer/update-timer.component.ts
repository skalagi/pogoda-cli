import { Component, OnInit } from '@angular/core';
import { BasicWeatherQuery, BasicWeatherService } from '../basic/state';
import { BehaviorSubject, interval } from 'rxjs';
import { timeInterval } from 'rxjs/operators';
import { ChartService } from '../charts/state';
import { RecordsService } from '../records/state';
import { SentencesService } from '../sentences/state';

@Component({
  selector: 'skalagi-update-timer',
  templateUrl: './update-timer.component.html',
  styleUrls: ['./update-timer.component.scss']
})
export class UpdateTimerComponent implements OnInit {
  loading$ = this.query.selectLoading();
  error$ = this.query.selectError();
  time$ = new BehaviorSubject(null);

  constructor(
    private query: BasicWeatherQuery,
    private basicService: BasicWeatherService,
    private chartService: ChartService,
    private recordsService: RecordsService,
    private sentencesService: SentencesService,
    ) { }

  updateServices() {
    this.basicService.update();
    this.chartService.update();
    this.recordsService.update();
    this.sentencesService.update();
  }

  tick() {
    const { value } = this.time$;

    if (value === 0) {
      this.time$.next(null);
      this.updateServices();
    }

    if (typeof value === 'number') {
      this.time$.next(value - 1);
    }
  }

  ngOnInit() {
    this.query.basic('time').subscribe(time => {
      const value = time.next.value;

      if (value) {
        if (typeof value === 'number') {
          this.time$.next(value);
        } else if (value.toLowerCase() === 'offline') {
          this.time$.next('OFFLINE');
        }
      }
    });

    interval(1000).subscribe(() => this.tick());
  }
}
