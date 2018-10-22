import { Component, AfterViewInit } from '@angular/core';
import { PerfumeAfterViewInit, NgPerfume } from 'perfume.js/angular';

@Component({
  selector: 'skalagi-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
@PerfumeAfterViewInit('HomepageComponent')
export class HomepageComponent implements AfterViewInit {

  constructor(private perfume: NgPerfume) {}

  ngAfterViewInit() {
    this.perfume.start('homepage');
    this.perfume.end('homepage');
  }

}
