import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import { StyledContainer } from '../styles/MainStyles';

const MainLayout = ({ children }) => (
  <div>
    <Nav />
    <Header />
    <StyledContainer>{children}</StyledContainer>
  </div>
);

export default MainLayout;
