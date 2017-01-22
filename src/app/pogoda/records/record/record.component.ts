import { Component, Input, OnInit } from '@angular/core';
import { RecordsService } from "../../api/records/records.service";
import { Record } from "../../api/records/records.interface";

@Component({
  selector: 'record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  constructor(private api: RecordsService) {}
  @Input('range') range: string;
  @Input('record') record: string;
  private data: Record;

  ngOnInit() {
    const { range, record } = this;
    this.api.get(range, record)
      .subscribe(record => this.data = record);
  }
}
