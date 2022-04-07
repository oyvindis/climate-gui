import { climateReadingGet } from './host';

export const getLocations = () =>
  climateReadingGet('/climate-api/location')
