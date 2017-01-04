import { Component, OnInit } from '@angular/core';
import { Rain, PogodaSkalagiApi } from "../api.interface";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.css']
})
export class RainComponent implements OnInit {
  constructor(private api: ApiService) { }
  public loaded: boolean = false;
  public rain: Rain;

  ngOnInit() {
    this.api.update.subscribe((api: PogodaSkalagiApi) => {
      this.rain = api.rain;
      this.loaded = true;
    });
  }
}
