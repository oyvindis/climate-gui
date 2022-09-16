import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { getLocations } from '../../services/api/climate/locations';

import ClimatePageWrapper from '../../components/pages/climate';
import { Location } from '../../types';

interface Props {}

const Climate: NextPage<Props> = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    getLocations().then(locations => setLocations(locations as Location[]));
  }, []);

  return <ClimatePageWrapper locations={locations} />;
};

export default Climate;
