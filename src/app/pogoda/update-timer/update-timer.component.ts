import { Component, OnInit } from '@angular/core';
import { BasicService } from '../api/basic/basic.service';
import { Unit } from '../unit/unit';
import { BasicApi } from '../basic/state';

@Component({
  selector: 'skalagi-update-timer',
  templateUrl: './update-timer.component.html',
  styleUrls: ['./update-timer.component.scss']
})
export class UpdateTimerComponent implements OnInit {
  public loaded = false;
  public data: Unit;
  public time = 0;

  constructor(private api: BasicService) { }

  ngOnInit() {
    const { api } = this;

    api.nextUpdate.subscribe(time => this.time = time);
    api.get((data: BasicApi) => {
      this.time = data.time.next.value;
      this.data = data.time.data;
      this.loaded = true;
    });
  }
}
