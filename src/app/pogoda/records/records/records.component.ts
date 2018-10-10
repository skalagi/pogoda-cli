import { Component, Input } from '@angular/core';
import { RecordsService } from '../state';

@Component({
  selector: 'records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent {
  @Input() public record: string;

  constructor(private _records: RecordsService) { }
}
