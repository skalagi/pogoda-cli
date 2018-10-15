import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentencesComponent } from './sentences.component';
import { MatProgressBarModule } from '@angular/material';
import { FlexModule } from '@angular/flex-layout/flex';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    MatProgressBarModule,
    MatProgressBarModule,
  ],
  declarations: [SentencesComponent],
  exports: [SentencesComponent]
})
export class SentencesModule {}
