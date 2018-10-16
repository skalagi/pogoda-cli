import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { slideTrigger } from 'app/pogoda/pogoda.animation';

@Component({
  selector: 'skalagi-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideTrigger],
})
export class RecordComponent {
  @Input() data;
}
