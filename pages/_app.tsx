import { AppProps } from 'next/app';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles';
import { defaultTheme as theme } from '../theme';

import Root from '../components/root';

const App: FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Root>
      <Component {...pageProps} />
    </Root>
  </ThemeProvider>
);

export default App;
