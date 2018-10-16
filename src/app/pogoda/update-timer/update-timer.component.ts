import { Component, OnInit } from '@angular/core';
import { BasicWeatherQuery, BasicWeatherService } from '../basic/state';
import { BehaviorSubject, interval } from 'rxjs';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'skalagi-update-timer',
  templateUrl: './update-timer.component.html',
  styleUrls: ['./update-timer.component.scss']
})
export class UpdateTimerComponent implements OnInit {
  loading$ = this.query.selectLoading();
  time$ = new BehaviorSubject(null);

  constructor(private query: BasicWeatherQuery, private service: BasicWeatherService) { }

  tick() {
    const { value } = this.time$;

    if (value === 0) {
      this.time$.next(null);
      this.service.update();
    }

    if (value) {
      this.time$.next(value - 1);
    }
  }

  ngOnInit() {
    this.query.basic('time').subscribe(time => time ? this.time$.next(time.next.value) : time);
    interval(1000).subscribe(() => this.tick());
  }
}
