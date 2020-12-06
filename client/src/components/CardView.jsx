import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSubHeader, StyledSubtitle } from '../styles/mainStyles';
import {
  StyledGridContainer,
  StyledCardItem,
  StyledCardTitle,
  StyledCardInfo,
} from '../styles/listStyles';

const CardView = ({ office }) => (
  <>
    <StyledSubHeader>
      <StyledSubtitle>
        {office.place} ({office.officeNr.length} kontorer)
      </StyledSubtitle>
    </StyledSubHeader>

    <StyledGridContainer>
      {office.officeNr.map((nr) => (
        <Link
          to={`/offices/${office.id}${nr}`}
          style={{ textDecoration: 'none' }}
        >
          <StyledCardItem>
            <StyledCardTitle>Rørlegger {nr}</StyledCardTitle>
            <StyledCardInfo>Rørleggerveien 1</StyledCardInfo>
            <StyledCardInfo>69 99 00 00</StyledCardInfo>
            <StyledCardInfo>
              {office.place}_{nr}@epost.no
            </StyledCardInfo>
          </StyledCardItem>
        </Link>
      ))}
    </StyledGridContainer>
  </>
);

export default CardView;
