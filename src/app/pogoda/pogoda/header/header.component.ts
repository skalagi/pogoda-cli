import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'skalagi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
}) export class HeaderComponent {
  @Output() toggleMenu$ = new Subject();
}
