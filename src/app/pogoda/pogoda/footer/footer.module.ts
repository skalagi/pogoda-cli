import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    MatButtonModule,
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
