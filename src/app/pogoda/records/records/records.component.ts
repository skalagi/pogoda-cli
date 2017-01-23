import { Component, Input } from '@angular/core';

@Component({
  selector: 'records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent {
  @Input() public record: string;
}
