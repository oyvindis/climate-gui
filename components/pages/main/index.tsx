import React, { memo, FC } from 'react';
import Image from 'next/image';

import Nature from '../../../public/nature.jpg';

import SC from './styled';

interface Props {}

const MainPageWrapper: FC<Props> = () => (
  <SC.MainPage>
    <Image
      alt='Nature'
      src={Nature}
      layout='fill'
      objectFit='cover'
      quality={70}
    />
    <SC.Title>www.oyvindis.com</SC.Title>
  </SC.MainPage>
);

export default memo(MainPageWrapper);
