import styled from 'styled-components';
import { StyledContainer } from './MainStyles.js';

export const StyledGridContainer = styled(StyledContainer)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 100px;
  grid-auto-rows: minmax(200px, auto);
  margin: 20px;
`;

export const StyledListContainer = styled(StyledContainer)``;

export const StyledCardItem = styled.div``;

export const StyledListItem = styled.div``;

export const StyledUL = styled.ul``;
