import { AppProps } from 'next/app';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles';
import { defaultTheme as theme } from '../theme';

const App: FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
