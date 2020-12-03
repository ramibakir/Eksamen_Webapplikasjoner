import React from 'react';
import styled from 'styled-components';
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
    { place: 'Fredrikstad', officeNr: [1, 2, 3, 4, 5, 6, 7, 8] },
    { place: 'Sarpsborg', officeNr: [1, 2, 3, 4, 5] },
    { place: 'Moss', officeNr: [1, 2, 3, 4] },
    { place: 'Oslo', officeNr: [1, 2, 3, 4] },
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
              <StyledCardItem>
                <StyledParagraph>Rørlegger {nr}</StyledParagraph>
                <CardParagraph>Rørleggerveien 1</CardParagraph>
                <CardParagraph>69 99 00 00</CardParagraph>
                <CardParagraph>
                  {office.place}_{nr}@epost.no
                </CardParagraph>
              </StyledCardItem>
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
              <StyledListItem>
                <StyledParagraph>Rørlegger {nr}</StyledParagraph>
                <CardParagraph>
                  Rørleggerveien 1 - 69 99 00 00 - {office.place}_{nr}@epost.no
                </CardParagraph>
              </StyledListItem>
            ))}
          </StyledListContainer>
        </>
      ))}
    </>
  );
};

export default Offices;
