import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles';
import { defaultTheme as theme } from '../theme';

import Root from '../components/root';

const App: FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => (
  <SessionProvider session={session}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Root>
        <Component {...pageProps} />
      </Root>
    </ThemeProvider>
  </SessionProvider>
);

export default App;
