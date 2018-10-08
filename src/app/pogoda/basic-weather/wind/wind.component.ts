import { Component, OnInit } from '@angular/core';
import { BasicApi, Wind } from '../../api/basic/basic.interface';
import { BasicService } from '../../api/basic/basic.service';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.scss']
})
export class WindComponent implements OnInit {
  public loaded = false;
  public wind: Wind;

  constructor(private api: BasicService) { }

  get title() {
    const { loaded, wind } = this;
    return loaded && wind && wind.current.speed.value === 0 ? 'Bezwietrznie' : 'Wiatr';
  }

  ngOnInit() {
    this.api.get((api: BasicApi) => {
      this.wind = api.wind;
      this.loaded = true;
    });
  }
}
