import styled from 'styled-components';
import { StyledContainer } from './MainStyles.js';

export const StyledGridContainer = styled(StyledContainer)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(150px, auto);
  margin: 20px;
`;

export const StyledListContainer = styled(StyledContainer)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(150px, auto);
  margin: 20px;
`;

export const StyledCardItem = styled.div`
  grid-template-columns: repeat(4, 1fr);
  //width: 10%;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.26);
`;

export const StyledListItem = styled.div`
  grid-template-columns: repeat(1, 1fr);
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.26);
`;

export const StyledUL = styled.ul``;
