import { Component, OnInit } from '@angular/core';
import { BasicService } from '../../api/basic/basic.service';
import { Pressure, BasicApi } from '../../api/basic/basic.interface';

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.scss']
})
export class PressureComponent implements OnInit {
  public loaded = false;
  public pressure: Pressure;
  constructor(private api: BasicService) { }

  ngOnInit() {
    this.api.get((api: BasicApi) => {
      console.log(api);
      this.pressure = api.barometer;
      this.loaded = true;
    });
  }
}
