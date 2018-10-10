import { Component, OnInit } from '@angular/core';
import { BasicWeatherService } from './state';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-basic-weather',
  templateUrl: './basic-weather.component.html',
  styleUrls: ['./basic-weather.component.scss']
})
export class BasicWeatherComponent implements OnInit {
  cards = [
    { title: 'Ciśnienie', type: 'barometer' },
    { title: 'Wilgotność', type: 'humidity' },
    { title: 'Temperatura', type: 'temperature' },
    { title: 'Podmuchy wiatru', type: 'windspeed' },
    { title: 'Opady', type: 'rain' },
  ];

  dropped(ev) {

    moveItemInArray(
      this.cards,
      ev.previousIndex,
      ev.currentIndex,
    );

  }

  constructor(store: BasicWeatherService) { }

  ngOnInit() {
  }

}
