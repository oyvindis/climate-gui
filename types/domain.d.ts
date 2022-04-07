export interface Location {
  id: string;
  name: string;
}

export interface Reading {
  id: string;
  location: string;
  localDateTime: string;
  battery: string;
  co2: string;
  humidity: string;
  pm1: string;
  pm25: string;
  pressure: string;
  temp: string;
  time: string;
  voc: string;
}
