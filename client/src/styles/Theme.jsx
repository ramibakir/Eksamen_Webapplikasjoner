import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global.js';

const theme = {
  breakpoints: {
    sm: '(max-width: 500px)',
    md: '(max-width: 800px)',
    lg: '(max-width: 1300px)',
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
