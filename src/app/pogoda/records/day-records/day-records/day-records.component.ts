import { Component, OnInit } from '@angular/core';
import { DayRecordsService } from "../../../api/records/day-records.service";
import { DayRecords } from "../../../api/records/day-records.interface";

@Component({
  selector: 'day-records',
  templateUrl: './day-records.component.html',
  styleUrls: ['./day-records.component.css']
})
export class DayRecordsComponent implements OnInit {
  constructor(private day: DayRecordsService) { }
  public records: DayRecords;

  ngOnInit() {
    this.day.records.subscribe(records => this.records = records);
  }
}
