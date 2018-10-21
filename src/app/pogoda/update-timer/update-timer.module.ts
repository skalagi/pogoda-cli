import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateTimerComponent } from './update-timer.component';
import { MatProgressSpinnerModule, MatTooltipModule } from '@angular/material';
import { MomentModule } from 'ngx-moment';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
        MomentModule,
        MatTooltipModule,
    ],

    exports: [UpdateTimerComponent],
    declarations: [UpdateTimerComponent],
})
export class UpdateTimerModule { }
