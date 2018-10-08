import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoBarComponent } from './info-bar.component';
import { ApiModule } from '../api/api.module';
import { MatIconModule, MatTooltipModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        ApiModule,
        MatTooltipModule,
        MatIconModule,
    ],

    exports: [InfoBarComponent],
    declarations: [InfoBarComponent],
})
export class InfoBarModule { }
