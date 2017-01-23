import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortableValueModule } from "../portable-value/portable-value.module";
import { MaterialModule } from "@angular/material";
import { RecordComponent } from "./record/record.component";
import { RecordsComponent } from './records/records.component';

@NgModule({
  imports: [CommonModule, MaterialModule.forRoot(), PortableValueModule],
  declarations: [RecordComponent, RecordsComponent],
  exports: [RecordComponent, RecordsComponent],
})
export class RecordsModule { }
