import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { MatToolbarModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
    ],

    exports: [HeaderComponent],
    declarations: [HeaderComponent],
})
export class PogodaModule { }
