import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'ngx-moment';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    MatListModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
