import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BasicWeatherService, BasicWeatherQuery } from './state';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { SEOService } from '../seo.service';

@Component({
  selector: 'skalagi-basic-weather',
  templateUrl: './basic-weather.component.html',
  styleUrls: ['./basic-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicWeatherComponent implements OnInit {
  basic$;
  cards = [
    { title: 'Ciśnienie', type: 'barometer' },
    { title: 'Temperatura', type: 'temperature' },
    { title: 'Wiatr', type: 'wind' },
    { title: 'Opady', type: 'rain' },
    { title: 'Wilgotność', type: 'humidity' },
  ];

  dropped(ev) {

    moveItemInArray(
      this.cards,
      ev.previousIndex,
      ev.currentIndex,
    );

  }

  constructor(store: BasicWeatherService, private query: BasicWeatherQuery, private seo: SEOService) { }

  ngOnInit() {
    this.seo.title('Pomiary');
    this.basic$ = this.query.select();
  }

}
