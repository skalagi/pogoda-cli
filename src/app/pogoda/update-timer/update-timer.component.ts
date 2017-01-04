import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { PogodaSkalagiApi, Unit } from "../api.interface";

@Component({
  selector: 'app-update-timer',
  templateUrl: './update-timer.component.html',
  styleUrls: ['./update-timer.component.css']
})
export class UpdateTimerComponent implements OnInit {
  constructor(private api: ApiService) { }
  public loaded: boolean = false;
  public time: number = 0;
  public data: Unit;

  ngOnInit() {
    const { api } = this;

    api.nextUpdate.subscribe(time => this.time = time);
    api.update.subscribe((api: PogodaSkalagiApi) => {
      this.time = api.time.next.value;
      this.data = api.time.data;
      this.loaded = true;
    });
  }
}
