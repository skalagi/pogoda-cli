import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { WindUnit } from "../../api.interface";

@Component({
  selector: 'wind-group',
  templateUrl: './wind-group.component.html',
  styleUrls: ['./wind-group.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WindGroupComponent {
  private wind;

  @Input()
  set data(wind) {
    this.wind = wind;
  }

  get data() : WindUnit[] {
    return [this.wind.current, this.wind.gust];
  }

  transform(wind) {
    return `rotate(${ wind.speed.value + 180 }deg)`;
  }
}
