import { climateReadingGet } from './host';

export const getReadings = (location: string) =>
  climateReadingGet(`/climate-api/reading/${location}`)
