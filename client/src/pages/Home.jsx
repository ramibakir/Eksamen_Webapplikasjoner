import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHomeLayout, StyledHomeSection } from '../styles/homeStyle';
import { StyledSubtitle } from '../styles/MainStyles';

const Home = () => (
  <StyledHomeLayout>
    <StyledHomeSection sectionName="offices">
      <Link to="/offices" style={{ textDecoration: 'none' }}>
        <StyledSubtitle>Kontorer</StyledSubtitle>
      </Link>
    </StyledHomeSection>

    <StyledHomeSection sectionName="contact">
      <Link to="/contact" style={{ textDecoration: 'none' }}>
        <StyledSubtitle>Kontakt</StyledSubtitle>
      </Link>
    </StyledHomeSection>

    <StyledHomeSection sectionName="articles">
      <Link to="/articles" style={{ textDecoration: 'none' }}>
        <StyledSubtitle>Se våre fagartikler om oppussing av bad</StyledSubtitle>
      </Link>
    </StyledHomeSection>
  </StyledHomeLayout>
);

export default Home;
