import React, { memo, FC, PropsWithChildren, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';

import SC from './styled';

interface Props {}

const Root: FC<PropsWithChildren<Props>> = ({ children }) => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      signIn();
    }
  }, [session]);

  return <SC.Root>{children}</SC.Root>;
};

export default memo(Root);
