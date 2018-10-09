import { Component, Input, OnInit } from '@angular/core';
import { RecordsService } from '../../api/records/records.service';
import { Record } from '../../api/records/records.interface';
import { Unit } from 'app/pogoda/api/unit.interface';

@Component({
  selector: 'record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  @Input('range') range: string;
  @Input('record') record: string;
  public data: Record | Unit;

  constructor(private api: RecordsService) {}

  ngOnInit() {
    const { range, record } = this;
    this.api.get(range, record)
      .subscribe(data => this.data = data);
  }
}
