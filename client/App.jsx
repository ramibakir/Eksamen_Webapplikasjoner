import React from 'react';
import styled from 'styled-components';
import Routes from './src/routes/Routes';
import Theme from './src/layouts/Theme';
import Footer from './src/components/Footer';
import AuthProvider from './src/context/AuthProvider';
import HeaderProvider from './src/context/HeaderProvider';

// Put this here to make footer stick to bottom with and without scroll
// https://css-tricks.com/couple-takes-sticky-footer/
const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const App = () => (
  <Theme>
    <AuthProvider>
      <HeaderProvider>
        <StyledWrapper>
          <Routes />
          <Footer />
        </StyledWrapper>
      </HeaderProvider>
    </AuthProvider>
  </Theme>
);

export default App;
