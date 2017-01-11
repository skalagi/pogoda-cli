import { Component, OnInit, trigger, transition, animate, style, state } from '@angular/core';
import { SentencesService } from "./sentences.service";

@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.css'],
  animations: [
    trigger('state', [
      transition('show <=> hide', animate('1000ms')),
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
    ]),
  ],
})
export class SentencesComponent implements OnInit {
  constructor(private api: SentencesService) { }
  private sentences: string[] = [];
  private current: number = 0;
  public state = 'show';

  get sentence() {
    const { sentences, current } = this;
    return sentences[current];
  }

  private get readTime() {
    return this.sentence.length * 72;
  }

  ngOnInit() {
    this.api.sentences.subscribe(sentences => {
      this.sentences = sentences;
      setTimeout(() => this.next(), this.readTime);
    });
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
