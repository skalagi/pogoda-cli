import { Component, OnInit } from '@angular/core';
import { SocketWeatherService } from '../api/socket-weather.service';

@Component({
  selector: 'app-basic-weather',
  templateUrl: './basic-weather.component.html',
  styleUrls: ['./basic-weather.component.scss']
})
export class BasicWeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
