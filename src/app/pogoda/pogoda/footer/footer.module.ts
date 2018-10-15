import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule, MatListModule } from '@angular/material';
import { FlexModule } from '@angular/flex-layout/flex';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    FlexModule,
    MatButtonModule,
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
