import { Component, OnInit, HostBinding, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { Subscription, interval } from 'rxjs';

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
  wait = false;

  constructor(private query: SentencesQuery, service: SentencesService) { }

  get sentence() {
    const { sentences, current } = this;
    const sentence = sentences[current];
    return sentence ? sentence : null;
  }

  private get readTime() {
    return this.sentence.length * 72;
  }

  tick() {
    if (this.sentence && !this.wait) {
      setTimeout(() => this.next(), this.readTime);
      this.wait = true;
    }
  }

  ngOnInit() {
    this.loading$ = this.query.selectLoading();
    this.error$ = this.query.selectError();
    interval(1000).subscribe(() => this.tick());

    this.subscription = this.query.list$.subscribe(sentences => {
      this.sentences = sentences.map(sentence => sentence.content);
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
      this.state = 'show';
      this.wait = false;
    }
  }

  private next() {
    this.state = 'hide';
  }
}
