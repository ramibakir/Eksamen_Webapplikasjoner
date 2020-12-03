import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import {
  StyledSubtitle,
  StyledParagraph,
  StyledButtonContainer,
  StyledButton,
  StyledSubHeader,
} from '../styles/MainStyles';
import {
  StyledGridContainer,
  StyledListContainer,
  StyledCardItem,
  StyledListItem,
} from '../styles/ListStyles';

const FilterContainer = styled(StyledButtonContainer)`
  margin: 20px 20px 0 0;
  float: right;
`;

const FilterButton = styled(StyledButton)`
  background-color: #ccc8c8;
  color: black;
`;

const CardParagraph = styled(StyledParagraph)`
  font-size: 14px;
`;

const Offices = () => {
  const officeList = [
    { id: 'fr', place: 'Fredrikstad', officeNr: [1, 2, 3, 4, 5, 6, 7, 8] },
    { id: 'sa', place: 'Sarpsborg', officeNr: [1, 2, 3, 4, 5] },
    { id: 'mo', place: 'Moss', officeNr: [1, 2, 3, 4] },
    { id: 'os', place: 'Oslo', officeNr: [1, 2, 3, 4] },
  ];

  return (
    <>
      <FilterContainer>
        <FilterButton>Filter</FilterButton>
        <ReorderIcon fontSize="large" />
        <ViewModuleIcon fontSize="large" />
      </FilterContainer>

      {officeList.map((office) => (
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
                  <StyledParagraph>Rørlegger {nr}</StyledParagraph>
                  <CardParagraph>Rørleggerveien 1</CardParagraph>
                  <CardParagraph>69 99 00 00</CardParagraph>
                  <CardParagraph>
                    {office.place}_{nr}@epost.no
                  </CardParagraph>
                </StyledCardItem>
              </Link>
            ))}
          </StyledGridContainer>
        </>
      ))}

      {officeList.map((office) => (
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
                  <StyledParagraph>Rørlegger {nr}</StyledParagraph>
                  <CardParagraph>
                    Rørleggerveien 1 - 69 99 00 00 - {office.place}_{nr}
                    @epost.no
                  </CardParagraph>
                </StyledListItem>
              </Link>
            ))}
          </StyledListContainer>
        </>
      ))}
    </>
  );
};

export default Offices;
