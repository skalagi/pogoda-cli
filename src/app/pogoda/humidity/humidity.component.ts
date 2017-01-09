import { Component, OnInit } from '@angular/core';
import { PogodaSkalagiApi, Unit } from "../api.interface";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css']
})
export class HumidityComponent implements OnInit {
  constructor(private api: ApiService) { }
  public loaded: boolean = false;
  public humidity: Unit;

  ngOnInit() {
    this.api.get((api: PogodaSkalagiApi) => {
      this.humidity = api.humidity;
      this.loaded = true;
    });
  }
}
