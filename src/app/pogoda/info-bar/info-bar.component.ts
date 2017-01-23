import { Component, OnInit } from '@angular/core';
import { BasicService } from "../api/basic/basic.service";
import { BasicApi } from "../api/basic/basic.interface";

@Component({
  selector: 'info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.css']
})
export class InfoBarComponent implements OnInit {
  public recordsAmount: number = 0;

  constructor(private basic: BasicService) {}

  ngOnInit() {
    this.basic.get((api: BasicApi) => {
      this.recordsAmount = api.count;
    });
  }
}
