import React from 'react';
import Routes from './src/routes/Routes';
import { GlobalStyles } from './src/styles/Global';
import Footer from './src/components/Footer';

const App = () => (
  <>
    <GlobalStyles />
    <Routes />
    <Footer />
  </>
);

export default App;
