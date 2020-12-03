import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import { StyledContainer } from '../styles/MainStyles';

const MainLayout = ({ children }) => (
  <>
    <Nav />
    <Header />
    <StyledContainer>{children}</StyledContainer>
  </>
);

export default MainLayout;
