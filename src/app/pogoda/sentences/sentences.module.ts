import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentencesComponent } from './sentences.component';
import { MatProgressBarModule } from '@angular/material';
import { InfoBarModule } from '../info-bar/info-bar.module';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    InfoBarModule,
    MatProgressBarModule
  ],
  declarations: [SentencesComponent],
  exports: [SentencesComponent]
})
export class SentencesModule {}
