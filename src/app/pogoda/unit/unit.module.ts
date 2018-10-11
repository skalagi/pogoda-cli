import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitComponent } from './unit/unit.component';
import { GridModule } from '@angular/flex-layout';
import { PortableValueModule } from '../portable-value/portable-value.module';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    GridModule,
    MatIconModule,
    PortableValueModule,
  ],
  declarations: [UnitComponent],
  exports: [UnitComponent]
})
export class UnitModule { }
