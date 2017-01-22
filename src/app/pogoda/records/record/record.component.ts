import { Component, Input } from '@angular/core';
import { RangeUnit } from "../../api/unit.interface";

@Component({
  selector: 'record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent {
  @Input('value') type: RangeUnit;
}
