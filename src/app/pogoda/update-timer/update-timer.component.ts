import { Component, OnInit } from '@angular/core';
import { BasicApi } from "../api/basic/basic.interface";
import { BasicService } from "../api/basic/basic.service";
import { Unit } from "../api/unit.interface";

@Component({
  selector: 'app-update-timer',
  templateUrl: './update-timer.component.html',
  styleUrls: ['./update-timer.component.scss']
})
export class UpdateTimerComponent implements OnInit {
  constructor(private api: BasicService) { }
  public loaded: boolean = false;
  public time: number = 0;
  public data: Unit;

  ngOnInit() {
    const { api } = this;

    api.nextUpdate.subscribe(time => this.time = time);
    api.get((api: BasicApi) => {
      this.time = api.time.next.value;
      this.data = api.time.data;
      this.loaded = true;
    });
  }
}
