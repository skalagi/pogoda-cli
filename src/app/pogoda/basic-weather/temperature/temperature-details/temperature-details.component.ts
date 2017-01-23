import { Component, OnInit } from '@angular/core';
import { BasicApi, Temperature } from "../../../api/basic/basic.interface";
import { BasicService } from "../../../api/basic/basic.service";

@Component({
  selector: 'app-temperature-details',
  templateUrl: './temperature-details.component.html',
  styleUrls: ['./temperature-details.component.css']
})
export class TemperatureDetailsComponent implements OnInit {
  constructor(private api: BasicService) { }
  public temperature: Temperature;
  public loaded: boolean = false;

  ngOnInit() {
    this.api.get(({ temperature }: BasicApi) => {
      this.temperature = temperature;
      this.loaded = true;
    });
  }
}
