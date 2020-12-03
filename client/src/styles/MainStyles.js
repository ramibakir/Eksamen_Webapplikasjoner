import styled from 'styled-components';

/* CONTAINER ELEMENTS START */
export const StyledContainer = styled.div`
  margin: 0 auto;
`;

export const StyledCenteredFlex = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHeader = styled(StyledCenteredFlex)`
  width: 100%;
  background-color: #84a9ac;
  height: 12rem;
  margin-bottom: 30px;
`;

export const StyledSubHeader = styled.div`
  margin: 20px;
`;

export const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  color: black;
  text-align: center;
`;

export const StyledButtonContainer = styled.div`
  justify-content: center;
`;
/* CONTAINER ELEMENTS END */

/* NAV START */
export const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  box-shadow: 0 2px 8px #3b6978;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  list-style: none;
`;

export const StyledNavMenuItem = styled(StyledCenteredFlex)`
  padding: 10px 20px;
  font-weight: 650;

  &:hover {
    background-color: #3b6978;

    & > a {
      color: white;
    }
  }

  & > a {
    color: #555;
    font-size: 15px;
    padding: 5px 10px;
    text-decoration: none;

    &.active {
      //color: #3b6978;
      font-weight: 900;
    }
  }

  &:last-child {
    background-color: #204051;

    & > a {
      color: white;
      text-transform: uppercase;
    }

    &:hover {
      background-color: #3b6978;
    }
  }
`;
/* NAV END */

/* TEXT ELEMENTS START */
export const StyledTitle = styled.h1`
  color: #888;
`;

export const StyledSubtitle = styled.h2`
  color: black;
`;

export const StyledParagraph = styled.p`
  color: #666;
  margin: 10px;
`;
/* TEXT ELEMENTS END */

/* BUTTON ELEMENTS START */
export const StyledButton = styled.button`
  color: white;
  background-color: teal;
  text-align: center;
  border: none;
  padding: 20px 30px;
  font-size: 15px;
  font-weight: bold;
  margin: 0px 4px;
`;
/* BUTTON ELEMENTS END */

/* IMAGE ELEMENTS START */
export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
/* IMAGE ELEMENTS END */
