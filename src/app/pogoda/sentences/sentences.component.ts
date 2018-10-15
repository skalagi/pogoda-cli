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
  state = 'show';
  loading$;
  error$;

  constructor(private query: SentencesQuery, service: SentencesService) { }

  get sentence() {
    const { sentences, current } = this;
    const sentence = sentences[current];
    return sentence ? sentence : null;
  }

  private get readTime() {
    return this.sentence.length * 72;
  }

  ngOnInit() {
    this.loading$ = this.query.selectLoading();
    this.error$ = this.query.selectError();
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
