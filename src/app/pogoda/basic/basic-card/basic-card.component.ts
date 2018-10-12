import { Component, OnInit, Input } from '@angular/core';
import { BasicWeatherQuery } from '../state';

@Component({
  selector: 'skalagi-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent implements OnInit {
  @Input() title;
  @Input() type;
  basic$;

  constructor(private query: BasicWeatherQuery) {}

  ngOnInit() {
    this.basic$ = this.query.basic(this.type);
  }
}
