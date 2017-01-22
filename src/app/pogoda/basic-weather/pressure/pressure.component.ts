import { Component, OnInit } from '@angular/core';
import { BasicService } from "../../api/basic/api.service";
import { Pressure, BasicApi } from "../../api/basic/basic.interface";

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.scss']
})
export class PressureComponent implements OnInit {
  constructor(private api: BasicService) { }
  public loaded: boolean = false;
  public pressure: Pressure;

  ngOnInit() {
    this.api.get((api: BasicApi) => {
      this.pressure = api.barometer;
      this.loaded = true;
    });
  }
}
