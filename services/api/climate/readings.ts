import { climateReadingGet } from './host';

export const getReadings = (location: string) =>
  climateReadingGet(`/gateway-api/climate-api/reading/${location}`)
