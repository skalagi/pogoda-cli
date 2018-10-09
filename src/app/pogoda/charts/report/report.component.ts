import { Component, Input } from '@angular/core';

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  @Input() public dataType = 'Temperatura';
  @Input() public type = 'outTemp';
}
