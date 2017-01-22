import { Component, OnInit } from '@angular/core';
import { Wind, PogodaSkalagiApi } from "../api.interface";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.scss']
})
export class WindComponent implements OnInit {
  constructor(private api: ApiService) { }
  public loaded: boolean = false;
  public wind: Wind;

  ngOnInit() {
    this.api.get((api: PogodaSkalagiApi) => {
      this.wind = api.wind;
      this.loaded = true;
    });
  }
}
