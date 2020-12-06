import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';
import { StyledContainer } from '../styles/mainStyles';

// Put this here to make footer stick to bottom with and without scroll
// https://css-tricks.com/couple-takes-sticky-footer/
const StyledMainContainer = styled(StyledContainer)`
  flex: 1 0 auto;
`;

const MainLayout = ({ children }) => (
  <>
    <Nav />
    <Header />
    <StyledMainContainer>{children}</StyledMainContainer>
  </>
);

export default MainLayout;
