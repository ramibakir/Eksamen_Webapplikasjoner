import styled from 'styled-components';

export const StyledHomeLayout = styled.div`
  width: 100%;
  padding: 50px;
  display: grid;
  grid-gap: 50px;
  grid-template-areas:
    'offices contact contact contact'
    'articles articles articles articles';
`;

export const StyledHomeSection = styled.section`
  grid-area: ${(props) => props.sectionName};
`;
