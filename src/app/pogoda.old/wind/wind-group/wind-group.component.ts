import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { WindUnit } from '../../../api/unit.interface';

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
  winds = [];
  private wind;

  get thereIsWind() {
    const { winds } = this;
    return winds && winds[0] && winds[1]
      && winds[0].data.dir.value != null
      && winds[1].data.dir.value != null;
  }

  @Input()
  set data(wind) {
    this.wind = wind;
    this.winds = [
      { name: 'Aktualny', data: wind && wind.current },
      { name: 'Powiew', data: wind && wind.gust },
    ];
  }

  get data() {
    return this.wind;
  }

  transform(wind) {
    return `rotate(${ wind ? wind.speed.value : 0 + 180 }deg)`;
  }
}
