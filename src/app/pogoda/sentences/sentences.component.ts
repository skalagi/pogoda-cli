import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { Subscription } from 'rxjs';

import { SentencesQuery, SentencesService } from './state';

@Component({
  selector: 'skalagi-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.css'],
  animations: [
    trigger('state', [
      transition('show <=> hide', animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      state('show', style({ opacity: 1, transform: 'translateY(0)' })),
      state('hide', style({ opacity: 0, transform: 'translateY(-16px)' })),
    ]),
  ],
})
export class SentencesComponent implements OnInit, OnDestroy {
  @HostBinding('class') primaryBg = 'primary-bg';
  private subscription: Subscription;
  private sentences: String[] = [];
  private current = 0;
  loading;
  state = 'show';

  constructor(sentences: SentencesService, private query: SentencesQuery) { }

  get sentence() {
    const { sentences, current } = this;
    return sentences[current];
  }

  private get readTime() {
    return this.sentence.length * 72;
  }

  ngOnInit() {
    this.subscription = this.query.list$.subscribe(sentences => {
      this.sentences = sentences.map(sentence => sentence.content);

      if (this.sentence) {
        setTimeout(() => this.next(), this.readTime);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showNew({ toState }) {
    if (toState === 'hide') {
      const { sentences, current } = this;
      const next = current + 1;

      this.current = sentences.length > next ? next : 0;
      setTimeout(() => this.next(), this.readTime);
      this.state = 'show';
    }
  }

  private next() {
    this.state = 'hide';
  }
}
