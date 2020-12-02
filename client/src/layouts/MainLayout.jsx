import React from 'react';
import Nav from '../components/Nav';
import { StyledContainer, StyledHeader } from '../styles/MainStyles';

const MainLayout = ({ children }) => (
  <div>
    <Nav />
    <StyledHeader />
    <StyledContainer>{children}</StyledContainer>
  </div>
);

export default MainLayout;
