import React from 'react';
import styled from 'styled-components';
import { StyledFooter, StyledParagraph } from '../styles/mainStyles';

const StyledFooterParagraphContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Footer = () => (
  <StyledFooter>
    <StyledFooterParagraphContainer>
      <StyledParagraph>Orgnr: 007 007 007</StyledParagraph>
      <StyledParagraph>lg@lgror.no</StyledParagraph>
      <StyledParagraph>99 00 00 00</StyledParagraph>
    </StyledFooterParagraphContainer>
  </StyledFooter>
);

export default Footer;
