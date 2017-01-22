import { RangeUnit, Unit } from "../unit.interface";

export interface Records {
  temperature: RangeUnit;
  humidity: RangeUnit;
  barometer: RangeUnit;
  windspeed: RangeUnit;
  rainrate: RangeUnit;
  winddir: Unit;
  rain: Unit;
}
