import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThermometerComponent } from "./thermometer.component";
import { ThermometerMeasureComponent } from "./thermometer-measure/thermometer-measure.component";
import { ThermometerSensorComponent } from "./thermometer-sensor/thermometer-sensor.component";
import { ThermometerSensorValueComponent } from "./thermometer-sensor-value/thermometer-sensor-value.component";
import { MaterialModule } from "@angular/material";

@NgModule({
  imports: [CommonModule, MaterialModule.forRoot()],
  declarations: [
    ThermometerComponent,
    ThermometerMeasureComponent,
    ThermometerSensorComponent,
    ThermometerSensorValueComponent,
  ],
  exports: [ThermometerComponent],
})
export class ThermometerModule { }
