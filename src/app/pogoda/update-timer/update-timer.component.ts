import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-update-timer',
  templateUrl: './update-timer.component.html',
  styleUrls: ['./update-timer.component.css']
})
export class UpdateTimerComponent implements OnInit {
  constructor(private api: ApiService) { }
  private time = 0;

  ngOnInit() {
    this.api.nextUpdate.subscribe(time => this.time = time);
  }
}
