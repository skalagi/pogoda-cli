import { Component, OnInit } from '@angular/core';
import { BasicApi, Wind } from "../../api/basic/basic.interface";
import { BasicService } from "../../api/basic/api.service";

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.scss']
})
export class WindComponent implements OnInit {
  constructor(private api: BasicService) { }
  public loaded: boolean = false;
  public wind: Wind;

  ngOnInit() {
    this.api.get((api: BasicApi) => {
      this.wind = api.wind;
      this.loaded = true;
    });
  }
}
