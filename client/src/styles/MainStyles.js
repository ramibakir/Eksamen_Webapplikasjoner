import styled from 'styled-components';

/* CONTAINER ELEMENTS START */
export const StyledContainer = styled.div`
  margin: 0;
`;

export const StyledDetailViewWrapper = styled(StyledContainer)`
  margin: 0 70px;
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
  display: inline-flex;
  margin-bottom: 30px;
`;

export const StyledSubHeader = styled.div`
  margin: 20px 0;
`;

export const StyledFooter = styled.div`
  width: 100%;
  background-color: white;
  color: black;
  text-align: center;
  flex-shrink: 0;
`;

export const StyledButtonContainer = styled.div`
  justify-content: center;
`;

export const FilterContainer = styled(StyledButtonContainer)`
  display: flex;
`;
/* CONTAINER ELEMENTS END */

/* NAV START */
export const StyledNav = styled.nav`
  width: 100%;
  height: 50px;
  box-shadow: 0 2px 8px #3b6978;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  list-style: none;
  background-color: white;

  @media ${({ theme }) => theme.breakpoints.md} {
    height: 35px;
    justify-content: space-between;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    z-index: ${(props) => props.menu && '999'};
    flex-direction: ${(props) => props.menu && 'column'};
    max-width: ${(props) => props.menu && '70%'};
    height: ${(props) => props.menu && 'auto'};
    position: ${(props) => props.menu && 'absolute'};
  }
`;

export const StyledNavMenuItem = styled(StyledCenteredFlex)`
  padding: 15px 30px;
  font-weight: 650;
  background-color: white;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 5px 10px;
    flex: 1 1 auto;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: none;
    display: ${(props) => props.menu && 'block'};
    padding: ${(props) => props.menu && '15px'};
  }

  &:hover {
    background-color: #3b6978;

    & > a {
      color: white;
    }
  }

  & > a {
    color: #555;
    font-size: 15px;
    //padding: 5px 10px;
    text-decoration: none;

    &.active {
      font-weight: 900;
    }

    @media ${({ theme }) => theme.breakpoints.md} {
      font-size: 13px;
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
  //margin: 10px;
`;
/* TEXT ELEMENTS END */

/* BUTTON ELEMENTS START */
export const StyledButton = styled.button`
  color: white;
  background-color: #204051;
  text-align: center;
  border: none;
  padding: 20px 30px;
  font-size: 15px;
  font-weight: bold;
  margin: 0px 4px;
`;

export const FilterButton = styled(StyledButton)`
  background-color: #3b6978;
  color: white;
`;
/* BUTTON ELEMENTS END */

/* IMAGE ELEMENTS START */
export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
/* IMAGE ELEMENTS END */

/* BREAKPOINT START */
/* BREAKPOINT END */
