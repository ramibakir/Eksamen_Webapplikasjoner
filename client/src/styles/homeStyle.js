import styled from 'styled-components';
import { StyledCenteredFlex } from './mainStyles';

export const StyledHomeLayout = styled.div`
  width: 100%;
  padding: 50px 5%;
  display: grid;
  grid-gap: 50px;
  grid-template-areas:
    'offices contact contact contact'
    'articles articles articles articles';
`;

export const StyledHomeSection = styled(StyledCenteredFlex)`
  grid-area: ${(props) => props.sectionName};
  background-color: #3b6978;
  //text-align: center;
  height: 12rem;
`;
