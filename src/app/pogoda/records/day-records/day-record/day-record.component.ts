import { Component, Input } from '@angular/core';
import { RangeUnit } from "../../../api/unit.interface";

@Component({
  selector: 'day-record',
  templateUrl: './day-record.component.html',
  styleUrls: ['./day-record.component.css']
})
export class DayRecordComponent {
  @Input('value') type: RangeUnit;
}
