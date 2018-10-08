import { UpdateTimerModule } from './../update-timer/update-timer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        UpdateTimerModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
    ],

    exports: [HeaderComponent],
    declarations: [HeaderComponent],
})
export class HeaderModule { }
