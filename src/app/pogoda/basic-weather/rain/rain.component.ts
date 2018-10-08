import { Component, OnInit } from '@angular/core';
import { Rain, BasicApi } from '../../api/basic/basic.interface';
import { BasicService } from '../../api/basic/basic.service';

@Component({
  selector: 'app-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.scss']
})
export class RainComponent implements OnInit {
  public loaded = false;
  public rain: Rain;
  constructor(private api: BasicService) { }

  get title() {
    const { loaded, rain } = this;
    return 'Opady';
    return loaded && rain && rain.current.value > 0 ? 'Opady' : 'Sucho';
  }

  ngOnInit() {
    this.api.get((api: BasicApi) => {
      this.rain = api.rain;
      this.loaded = true;
    });
  }
}
