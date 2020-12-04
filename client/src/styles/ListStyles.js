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
  grid-auto-rows: minmax(90px, auto);
  margin: 20px;
`;

export const StyledCardItem = styled.div`
  grid-template-columns: repeat(4, 1fr);
  background-color: #204051;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //border: 1px solid black;
  border-radius: 4px;
  box-shadow: 4px 4px 8px #84a9ac;
  padding: 5px;
`;

export const StyledListItem = styled.div`
  grid-template-columns: repeat(1, 1fr);
  background-color: #204051;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  //border: 1px solid black;
  border-radius: 4px;
  box-shadow: 4px 4px 8px #84a9ac;
  padding: 5px 250px 5px 5px;
`;

export const StyledCardTitle = styled.h3`
  color: white;
  font-size: 1.6rem;
  margin: 5px;
`;

export const StyledCardInfo = styled.p`
  color: white;
  font-size: 1.1rem;
  margin: 5px;
`;

export const StyledUL = styled.ul``;
