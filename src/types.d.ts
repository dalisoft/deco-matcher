export interface IDecoFeature {
  antennas: 2 | 4 | 6 | 8 | number;
  bands: 2 | 3;
  wifi: 5 | 6;
  wifi_6e: 0 | 1;
  ofdma: 0 | 1;
  streams: 0 | 2 | 4 | 6 | 7 | 8;
}

export interface IDecoUnit {
  name: string;
  packs: 1 | 2 | 3;
  price: number;
  speed: number[];
  coverage: number;
  features: IDecoFeature;
}

export interface IPercent {
  price: number;
  coverage: number;
  speed: number;
  features: number;
}

export interface IRaw {
  name: string;
  price: string;
  coverage: string;
  speed: string;
  features: IDecoFeature;
  value: number;
}

export interface IDescribe extends Omit<IRaw, "features" | "value"> {
  raw: IRaw;
}
