import { Component, OnInit } from '@angular/core';
import { BasicWeatherService } from './state';

@Component({
  selector: 'app-basic-weather',
  templateUrl: './basic-weather.component.html',
  styleUrls: ['./basic-weather.component.scss']
})
export class BasicWeatherComponent implements OnInit {

  constructor(store: BasicWeatherService) { }

  ngOnInit() {
  }

}
