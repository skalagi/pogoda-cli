import { Unit } from "../unit.interface";

export interface Record {
  min?: Unit;
  max: Unit;
}

export interface Records {
  temperature: Record;
  humidity: Record;
  barometer: Record;
  windspeed: Record;
  rainrate: Record;
  winddir: Unit;
  rain: Unit;
}
