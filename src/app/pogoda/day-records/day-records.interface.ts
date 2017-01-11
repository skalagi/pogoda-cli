import { Unit } from "../api.interface";

export interface RangeUnit {
  min?: Unit;
  max: Unit;
}

export interface DayRecords {
  temperature: RangeUnit;
  humidity: RangeUnit;
  barometer: RangeUnit;
  windspeed: RangeUnit;
  rainrate: RangeUnit;
  winddir: Unit;
  rain: Unit;
}
