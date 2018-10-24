export * from './forecast.query';
export * from './forecast.store';
export * from './forecast.service';

export interface Forecastday {
    period: number;
    icon: string;
    icon_url: string;
    title: string;
    fcttext: string;
    fcttext_metric: string;
    pop: string;
}

export interface TxtForecast {
    date: string;
    forecastday: Forecastday[];
}

export interface Date {
    epoch: string;
    pretty: string;
    day: number;
    month: number;
    year: number;
    yday: number;
    hour: number;
    min: string;
    sec: number;
    isdst: string;
    monthname: string;
    monthname_short: string;
    weekday_short: string;
    weekday: string;
    ampm: string;
    tz_short: string;
    tz_long: string;
}

export interface High {
    fahrenheit: string;
    celsius: string;
}

export interface Low {
    fahrenheit: string;
    celsius: string;
}

export interface QpfAllday {
    in: number;
    mm: number;
}

export interface QpfDay {
    in: number;
    mm: number;
}

export interface QpfNight {
    in: number;
    mm: number;
}

export interface SnowAllday {
    in: number;
    cm: number;
}

export interface SnowDay {
    in: number;
    cm: number;
}

export interface SnowNight {
    in: number;
    cm: number;
}

export interface Maxwind {
    mph: number;
    kph: number;
    dir: string;
    degrees: number;
}

export interface Avewind {
    mph: number;
    kph: number;
    dir: string;
    degrees: number;
}

export interface Forecastday2 {
    date: Date;
    period: number;
    high: High;
    low: Low;
    conditions: string;
    icon: string;
    icon_url: string;
    skyicon: string;
    pop: number;
    qpf_allday: QpfAllday;
    qpf_day: QpfDay;
    qpf_night: QpfNight;
    snow_allday: SnowAllday;
    snow_day: SnowDay;
    snow_night: SnowNight;
    maxwind: Maxwind;
    avewind: Avewind;
    avehumidity: number;
    maxhumidity: number;
    minhumidity: number;
}

export interface Simpleforecast {
    forecastday: Forecastday2[];
}

export interface Forecast {
    txt_forecast: TxtForecast;
    simpleforecast: Simpleforecast;
}

export interface RootObject {
    forecast: Forecast;
}
