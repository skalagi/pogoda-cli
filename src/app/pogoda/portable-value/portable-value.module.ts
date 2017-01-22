import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortableValueComponent } from "./portable-value.component";
import { MaterialModule } from "@angular/material";

@NgModule({
  imports: [CommonModule, MaterialModule.forRoot()],
  declarations: [PortableValueComponent],
  exports: [PortableValueComponent],
})
export class PortableValueModule { }
