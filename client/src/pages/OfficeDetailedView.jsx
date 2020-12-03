import React from 'react';
import styled from 'styled-components';
import {
  StyledSubtitle,
  StyledParagraph,
  StyledImage,
} from '../styles/MainStyles';
import { StyledGridContainer, StyledCardItem } from '../styles/ListStyles';

const EmployeeImage = styled(StyledImage)`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
  display: block;
  margin: 0 auto;
`;

const OfficeDetailedView = () => (
  <>
    <StyledSubtitle>Velkommen til Rørlegger 1</StyledSubtitle>
    <StyledParagraph>
      And the gratitude I get is this charlatan chose not to do his job, which
      is to WRITE. Clearly, someone who believes he is above the law. Well,
      you've been warned, dude. Bring it. Check it, Alex, I embarrassed him in
      front of his children and the world by healing at a pace that his
      unevolved mind can't process. Okay ... last I checked, Chaim, I've spent
      close to the last decade, I don't know, effortless and magically
      converting your tin cans into pure gold.
    </StyledParagraph>
    <StyledSubtitle>Våre ansatte</StyledSubtitle>
    <StyledGridContainer>
      <StyledCardItem>
        <EmployeeImage src="https://c8.alamy.com/comp/BP35EX/ripe-grapefruit-with-a-person-smiling-girl-computer-assembly-on-a-BP35EX.jpg" />
        <StyledParagraph>Ansatt Ansattnavn</StyledParagraph>
        <StyledParagraph>Stilling</StyledParagraph>
      </StyledCardItem>
    </StyledGridContainer>
  </>
);

export default OfficeDetailedView;
