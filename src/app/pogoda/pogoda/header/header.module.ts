import { UpdateTimerModule } from '../../update-timer/update-timer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        UpdateTimerModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
    ],

    exports: [HeaderComponent],
    declarations: [HeaderComponent],
})
export class HeaderModule { }
