import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { StyledContainer } from '../styles/MainStyles';

const MainLayout = ({ children }) => (
  <div>
    <Nav />
    <Header />
    <StyledContainer>{children}</StyledContainer>
    <Footer />
  </div>
);

export default MainLayout;
