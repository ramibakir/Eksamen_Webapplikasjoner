import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSubHeader, StyledSubtitle } from '../styles/MainStyles';
import {
  StyledListContainer,
  StyledListItem,
  StyledCardTitle,
  StyledCardInfo,
} from '../styles/ListStyles';

const ListView = ({ office }) => (
  <>
    <StyledSubHeader>
      <StyledSubtitle>
        {office.place} ({office.officeNr.length} kontorer)
      </StyledSubtitle>
    </StyledSubHeader>

    <StyledListContainer>
      {office.officeNr.map((nr) => (
        <Link
          to={`/offices/${office.id}${nr}`}
          style={{ textDecoration: 'none' }}
        >
          <StyledListItem>
            <StyledCardTitle>Rørlegger {nr}</StyledCardTitle>
            <StyledCardInfo>Rørleggerveien 1</StyledCardInfo>
            <StyledCardInfo>69 99 00 00</StyledCardInfo>
            <StyledCardInfo>
              {office.place}_{nr}@epost.no
            </StyledCardInfo>
          </StyledListItem>
        </Link>
      ))}
    </StyledListContainer>
  </>
);

export default ListView;
