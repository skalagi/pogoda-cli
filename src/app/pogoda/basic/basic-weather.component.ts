import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { BasicWeatherService, BasicWeatherQuery } from './state';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { SEOService } from '../seo.service';
import { NgPerfume, PerfumeAfterViewInit } from 'perfume.js/angular';


@Component({
  selector: 'skalagi-basic-weather',
  templateUrl: './basic-weather.component.html',
  styleUrls: ['./basic-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@PerfumeAfterViewInit('BasicWeatherComponent')
export class BasicWeatherComponent implements OnInit, AfterViewInit {
  basic$;
  cards = [
    { title: 'Ciśnienie', type: 'barometer' },
    { title: 'Temperatura', type: 'temperature' },
    { title: 'Wiatr', type: 'wind' },
    { title: 'Opady', type: 'rain' },
    { title: 'Wilgotność', type: 'humidity' },
  ];

  ngAfterViewInit() {
    this.perfume.start('homepage');
    this.perfume.end('homepage');
  }

  dropped(ev) {

    moveItemInArray(
      this.cards,
      ev.previousIndex,
      ev.currentIndex,
    );

  }

  constructor(
    store: BasicWeatherService,
    private query: BasicWeatherQuery,
    private seo: SEOService,
    private perfume: NgPerfume) { }

  ngOnInit() {
    this.seo.title('Pomiary');
    this.basic$ = this.query.select();
  }

}
