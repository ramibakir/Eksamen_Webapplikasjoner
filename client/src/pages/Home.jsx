import React from 'react';
import { StyledHomeLayout, StyledHomeSection } from '../styles/homeStyle';
import { StyledSubtitle } from '../styles/MainStyles';

const Home = () => (
  <StyledHomeLayout>
    <StyledHomeSection sectionName="offices">
      <StyledSubtitle>Kontorer</StyledSubtitle>
    </StyledHomeSection>

    <StyledHomeSection sectionName="contact">
      <StyledSubtitle>Kontakt</StyledSubtitle>
    </StyledHomeSection>

    <StyledHomeSection sectionName="articles">
      <StyledSubtitle>Se våre fagartikler om oppussing av bad</StyledSubtitle>
    </StyledHomeSection>
  </StyledHomeLayout>
);

export default Home;
