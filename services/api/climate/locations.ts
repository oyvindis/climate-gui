import { climateReadingGet } from './host';

export const getLocations = () =>
  climateReadingGet('/gateway-api/climate-api/location')
