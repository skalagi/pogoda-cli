import { Component, NgZone, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { akitaDevtools } from '@datorama/akita';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'skalagi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(ngZone: NgZone, private sw: SwUpdate, private snack: MatSnackBar) {
    if (!environment.production) {
      akitaDevtools(ngZone);
    }
  }

  ngOnInit() {
    this.sw.available.subscribe(evt => {
      const snack = this.snack.open('Dostępna aktualizacja', 'ODŚWIEŻ');

      snack.onAction()
        .subscribe(() => window.location.reload());

      setTimeout(() => {
        snack.dismiss();
      }, 7000);
    });
  }
}
