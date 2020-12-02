import React from 'react';
import { StyledHomeLayout, StyledHomeSection } from '../styles/HomeStyle';

const Home = () => (
  <StyledHomeLayout>
    <StyledHomeSection sectionName="offices">
      <h2>Kontorer</h2>
    </StyledHomeSection>

    <StyledHomeSection sectionName="contact">
      <h2>Kontakt</h2>
    </StyledHomeSection>

    <StyledHomeSection sectionName="articles">
      <h2>Se våre fagartikler om oppussing av bad</h2>
    </StyledHomeSection>
  </StyledHomeLayout>
);

export default Home;
