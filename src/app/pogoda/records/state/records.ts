import { Unit, unit } from '../../unit/unit';

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

export function record(data?: Partial<Record>): Record {
    return { ...data, max: unit() };
}

export function records(data?: Partial<Records>): Records {
    return { ...data,
        temperature: record(),
        barometer: record(),
        windspeed: record(),
        humidity: record(),
        rainrate: record(),
        winddir: unit(),
        rain:  unit(),
    };
}
