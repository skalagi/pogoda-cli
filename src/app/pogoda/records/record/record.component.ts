import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'skalagi-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordComponent {
  @Input() data$;
}
