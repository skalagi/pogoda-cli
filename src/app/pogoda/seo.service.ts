import { Title, Meta } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
   providedIn: 'root'
})
export class SEOService {
   constructor(private _title: Title, @Inject(DOCUMENT) private doc, private meta: Meta) {}

   createCanonical() {
      let link: HTMLLinkElement = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
      link.setAttribute('href', this.doc.URL);
   }

   title(title) {
       this._title.setTitle(title);
   }

   description(content) {
      this.meta.updateTag({ name: 'description', content });
   }
}
