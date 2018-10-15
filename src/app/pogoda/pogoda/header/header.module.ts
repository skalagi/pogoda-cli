import { UpdateTimerModule } from '../../update-timer/update-timer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexModule } from '@angular/flex-layout/flex';

@NgModule({
    imports: [
        CommonModule,
        UpdateTimerModule,
        RouterModule,
        FlexModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
    ],

    exports: [HeaderComponent],
    declarations: [HeaderComponent],
})
export class HeaderModule { }
