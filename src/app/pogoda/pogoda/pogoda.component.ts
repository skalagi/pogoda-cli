import { Component, OnInit } from '@angular/core';
import { SEOService } from '../seo.service';

@Component({
  selector: 'skalagi-pogoda',
  templateUrl: './pogoda.component.html',
  styleUrls: ['./pogoda.component.scss']
})
export class PogodaComponent implements OnInit {
  constructor(private seo: SEOService) {}

  ngOnInit() {
    this.seo.createCanonical();
  }
}
