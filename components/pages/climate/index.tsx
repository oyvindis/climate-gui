import React, { memo, FC } from 'react';
import Link from 'next/link';

import Container from '../../container';
import SC from './styled';
import { Location } from '../../../types';

interface Props {
  locations: Location[];
}

const ClimatePageWrapper: FC<Props> = ({ locations }) => (
  <Container>
    <SC.ClimatePage>
      <ul>
        {locations?.length > 0 &&
          locations.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/climate/location/${id}`}>
                {name ?? 'Lokasjon mangler navn'}
              </Link>
            </li>
          ))}
      </ul>
    </SC.ClimatePage>
  </Container>
);

export default memo(ClimatePageWrapper);
