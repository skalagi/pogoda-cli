import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { WindUnit } from "../../../api/unit.interface";

export interface WindData {
  data: WindUnit;
  name: string;
}

@Component({
  selector: 'wind-group',
  templateUrl: './wind-group.component.html',
  styleUrls: ['./wind-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WindGroupComponent {
  public icon = 'arrow_upward';
  private winds;
  private wind;

  @Input()
  set data(wind) {
    this.wind = wind;
    this.winds = [
      { name: 'Aktualny', data: wind.current },
      { name: 'Powiew', data: wind.gust },
    ];
  }

  get data() {
    return this.wind;
  }

  transform(wind) {
    return `rotate(${ wind.speed.value + 180 }deg)`;
  }
}
