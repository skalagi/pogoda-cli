import { Component, OnInit } from '@angular/core';
import { BasicApi } from '../../api/basic/basic.interface';
import { Unit } from '../../api/unit.interface';
import { BasicService } from '../../api/basic/basic.service';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent implements OnInit {
  public loaded = false;
  public humidity: Unit;
  constructor(private api: BasicService) { }

  ngOnInit() {
    this.api.get((api: BasicApi) => {
      this.humidity = api.humidity;
      this.loaded = true;
    });
  }
}
