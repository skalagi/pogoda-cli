import { NgModule } from '@angular/core';

import { BasicService } from './basic/basic.service';

@NgModule({
  providers: [
    BasicService,
  ],
})
export class ApiModule { }
