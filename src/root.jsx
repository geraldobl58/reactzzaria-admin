import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

import { AuthProvider } from 'contexts';

import { GlobalStyles } from 'styles/global';

import App from './app';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  }
});

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <GlobalStyles />
            <BrowserRouter>
            <App />
          </BrowserRouter>
          </AuthProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default Root;
