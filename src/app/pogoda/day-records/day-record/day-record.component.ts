import { Component, OnInit, Input } from '@angular/core';
import { RangeUnit } from "../day-records.interface";

@Component({
  selector: 'app-day-record',
  templateUrl: './day-record.component.html',
  styleUrls: ['./day-record.component.css']
})
export class DayRecordComponent implements OnInit {
  @Input('value') type: RangeUnit;

  constructor() { }

  ngOnInit() {
  }

}
