import { Component, OnInit } from '@angular/core';
import { SentencesService } from "./sentences.service";

@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.css']
})
export class SentencesComponent implements OnInit {
  constructor(private api: SentencesService) { }
  private sentences: string[] = [];
  private current: number = 0;

  get sentence() {
    const { sentences, current } = this;
    return sentences[current];
  }

  ngOnInit() {
    this.api.sentences.subscribe(sentences => this.sentences = sentences);
    setInterval(() => this.next(),1500);
  }

  next() {
    const { sentences, current } = this;
    const next = current + 1;

    this.current = sentences.length > next ? next : 0;
  }
}
