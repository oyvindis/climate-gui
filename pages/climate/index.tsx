import type { NextPage, GetServerSidePropsResult } from 'next';

import { getLocations } from '../../services/api/climate/locations';

import ClimatePageWrapper from '../../components/pages/climate';
import { Location } from '../../types';

interface Props {
  locations: Location[];
}

const Climate: NextPage<Props> = ({ locations }) => {
  return <ClimatePageWrapper locations={locations} />;
};

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<Props>
> {
  const locations = await getLocations() as Location[];
  return { props: { locations } };
}

export default Climate;
