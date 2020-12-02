import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const StyledHeader = styled.div`
  width: 100%;
  background-color: grey;
`;

export const StyledFooter = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  color: black;
  text-align: center;
`;

/* NAV START */
export const StyledNav = styled.nav`
  width: 100%;
  height: 50px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.26);
`;

export const StyledNavMenu = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
  padding: 0 20px;
  float: right;
`;

export const StyledNavMenuItem = styled.li`
  padding: 0 20px;
  display: block;
  justify-content: space-between;
  font-weight: bold;

  &:first-child {
    padding-left: 0;
  }

  & > a {
    color: #555;
    font-size: 15px;
    padding: 5px 10px;
    text-decoration: none;

    &.active {
      color: teal;
    }
  }

  &:last-child {
    background-color: teal;
  }
`;
/* NAV END */

export const StyledTitle = styled.h1`
  color: #888;
`;

export const StyledSubtitle = styled.h2`
  color: black;
  margin: 10px;
`;

export const StyledParagraph = styled.p`
  color: #666;
  padding: 10px;
`;

export const StyledButton = styled.button`
  color: white;
  background-color: teal;
  text-align: center;
  border: none;
  padding: 20px 30px;
  font-size: 15px;
  margin: 4px 2px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
