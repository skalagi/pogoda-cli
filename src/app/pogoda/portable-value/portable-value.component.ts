import { Component, Input } from '@angular/core';

@Component({
  selector: 'portable-value',
  templateUrl: './portable-value.component.html',
  styleUrls: ['./portable-value.component.css']
})
export class PortableValueComponent {
  @Input() afterTip = '';
  @Input() preTip = '';
  @Input() afterText = '';
  @Input() preText = '';
  @Input() value = '';
  @Input() after = '';
  @Input() pre = '';
}
