import { Component, OnInit } from '@angular/core';
import { SEOService } from '../seo.service';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from 'environments/environment';

@Component({
  selector: 'skalagi-pogoda',
  templateUrl: './pogoda.component.html',
  styleUrls: ['./pogoda.component.scss']
})
export class PogodaComponent implements OnInit {
  constructor(private seo: SEOService, private router: Router) {}

  ngOnInit() {
    this.seo.createCanonical();

    if (environment.production) {
      (<any>window).ga('set', 'page', this.router.url);
      (<any>window).ga('send', 'pageview');
    }

    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        if (environment.production) {
          (<any>window).ga('set', 'page', ev.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        }
      }
    });

    /*
      this.sw.available.subscribe(() => {
        if (confirm('Dostępna nowa wersja strony. Wczytać?')) {
          location.reload();
        }
      });
    */
  }
}
