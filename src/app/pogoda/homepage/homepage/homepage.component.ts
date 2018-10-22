import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { PerfumeAfterViewInit, NgPerfume } from 'perfume.js/angular';

@Component({
  selector: 'skalagi-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@PerfumeAfterViewInit('HomepageComponent')
export class HomepageComponent implements AfterViewInit {

  constructor(private perfume: NgPerfume) {}

  ngAfterViewInit() {}
}
