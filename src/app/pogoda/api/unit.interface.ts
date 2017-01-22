export interface Unit {
  name: string;
  units: string;
  value: any;
}

export interface WindUnit {
  translated: string;
  speed: Unit;
  dir: Unit;
}
