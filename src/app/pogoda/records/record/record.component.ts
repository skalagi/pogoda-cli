import { Component, Input } from '@angular/core';
import { Record } from "../../api/records/records.interface";

@Component({
  selector: 'record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent {
  @Input('value') type: Record;
}
