import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Reading } from '../../../../types';
import { getReadings } from '../../../../services/api/climate/readings';

interface Props {}

const Location: NextPage<Props> = () => {
  const [readings, setReadings] = useState<Reading[]>([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getReadings(Array.isArray(id) ? id[0] : id).then(readings =>
      setReadings(readings as Reading[])
    );
  }, [id]);

  return (
    <div>
      <ul>
        {readings?.length > 0 &&
          readings.map(({ id, humidity, temp, localDateTime }) => (
            <li key={id}>
              <div>
                {temp} - {humidity} - {localDateTime}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Location;
