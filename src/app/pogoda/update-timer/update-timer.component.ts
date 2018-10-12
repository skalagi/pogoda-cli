import { Component, OnInit } from '@angular/core';
import { Unit } from '../unit/unit';
import { BasicWeatherQuery } from '../basic/state';

@Component({
  selector: 'skalagi-update-timer',
  templateUrl: './update-timer.component.html',
  styleUrls: ['./update-timer.component.scss']
})
export class UpdateTimerComponent implements OnInit {
  public loaded = false;
  public data: Unit;
  public time = 0;

  constructor(private query: BasicWeatherQuery) { }

  ngOnInit() {

  }
}
