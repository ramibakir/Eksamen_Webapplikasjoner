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
  //padding: 10px;
  float: right;
`;

const FilterButton = styled(StyledButton)`
  background-color: #ccc8c8;
  color: black;
`;

const CardParagraph = styled(StyledParagraph)`
  font-size: 14px;
`;

const Offices = () => (
  <>
    <StyledSubHeader>
      <FilterContainer>
        <FilterButton>Filter</FilterButton>
        <ReorderIcon fontSize="large" />
        <ViewModuleIcon fontSize="large" />
      </FilterContainer>
      <StyledSubtitle>Fredrikstad (8 kontorer)</StyledSubtitle>
    </StyledSubHeader>

    <StyledGridContainer>
      <StyledCardItem>
        <StyledParagraph>Rørlegger 1</StyledParagraph>
        <CardParagraph>Rørleggerveien 1</CardParagraph>
        <CardParagraph>69 99 00 00</CardParagraph>
        <CardParagraph>fredrikstad1@epost.no</CardParagraph>
      </StyledCardItem>
      <StyledCardItem>
        <StyledParagraph>Våre kontorer 1</StyledParagraph>
      </StyledCardItem>
      <StyledCardItem>
        <StyledParagraph>Våre kontorer 2</StyledParagraph>
      </StyledCardItem>
      <StyledCardItem>
        <StyledParagraph>Våre kontorer 3</StyledParagraph>
      </StyledCardItem>
      <StyledCardItem>
        <StyledParagraph>Våre kontorer 4</StyledParagraph>
      </StyledCardItem>
      <StyledCardItem>
        <StyledParagraph>Våre kontorer 5</StyledParagraph>
      </StyledCardItem>
      <StyledCardItem>
        <StyledParagraph>Våre kontorer 6</StyledParagraph>
      </StyledCardItem>
      <StyledCardItem>
        <StyledParagraph>Våre kontorer 7</StyledParagraph>
      </StyledCardItem>
      <StyledCardItem>
        <StyledParagraph>Våre kontorer 8</StyledParagraph>
      </StyledCardItem>
    </StyledGridContainer>
    <StyledSubtitle>Sarpsborg</StyledSubtitle>
    <StyledListContainer>
      <StyledListItem>
        <StyledParagraph>Rørlegger 1</StyledParagraph>
        <CardParagraph>Rørleggerveien 1</CardParagraph>
        <CardParagraph>69 99 00 00</CardParagraph>
        <CardParagraph>fredrikstad1@epost.no</CardParagraph>
      </StyledListItem>
      <StyledListItem>
        <StyledParagraph>Rørlegger 2</StyledParagraph>
        <CardParagraph>Rørleggerveien 1</CardParagraph>
        <CardParagraph>69 99 00 00</CardParagraph>
        <CardParagraph>fredrikstad1@epost.no</CardParagraph>
      </StyledListItem>
      <StyledListItem>
        <StyledParagraph>Rørlegger 3</StyledParagraph>
        <CardParagraph>Rørleggerveien 1</CardParagraph>
        <CardParagraph>69 99 00 00</CardParagraph>
        <CardParagraph>fredrikstad1@epost.no</CardParagraph>
      </StyledListItem>
      <StyledListItem>
        <StyledParagraph>Rørlegger 3</StyledParagraph>
        <CardParagraph>Rørleggerveien 1</CardParagraph>
        <CardParagraph>69 99 00 00</CardParagraph>
        <CardParagraph>fredrikstad1@epost.no</CardParagraph>
      </StyledListItem>
      <StyledListItem>
        <StyledParagraph>Rørlegger 4</StyledParagraph>
        <CardParagraph>Rørleggerveien 1</CardParagraph>
        <CardParagraph>69 99 00 00</CardParagraph>
        <CardParagraph>fredrikstad1@epost.no</CardParagraph>
      </StyledListItem>
    </StyledListContainer>
    <StyledSubtitle>Moss</StyledSubtitle>
    <StyledGridContainer>
      <p>Våre kontorer</p>
      <p>Våre kontorer 2</p>
      <p>Våre kontorer 3</p>
      <p>Våre kontorer 4</p>
    </StyledGridContainer>
    <StyledSubtitle>Oslo</StyledSubtitle>
    <StyledGridContainer>
      <p>Våre kontorer</p>
      <p>Våre kontorer 2</p>
      <p>Våre kontorer 3</p>
      <p>Våre kontorer 4</p>
    </StyledGridContainer>
  </>
);

export default Offices;
