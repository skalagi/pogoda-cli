import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateTimerComponent } from './update-timer.component';
import { MatProgressSpinnerModule, MatTooltipModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        MomentModule,
        MatTooltipModule,
    ],

    exports: [UpdateTimerComponent],
    declarations: [UpdateTimerComponent],
})
export class UpdateTimerModule { }
