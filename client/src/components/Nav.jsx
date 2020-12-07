import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import {
  StyledNav,
  StyledNavMenuItem,
  StyledButton,
} from '../styles/mainStyles';
import { useAuthContext } from '../context/AuthProvider';
import { logout } from '../utils/authService';

const Nav = () => {
  const [menu, setShowMenu] = useState(false);
  const { isLoggedIn, isAdmin, setUser } = useAuthContext();

  const MenuIconContainer = styled.div`
    display: none;

    @media ${({ theme }) => theme.breakpoints.sm} {
      display: block;
    }
  `;

  const toggleMenu = () => {
    setShowMenu((display) => !display);
    console.log(menu);
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <>
      <StyledNav menu={menu}>
        <MenuIconContainer onClick={toggleMenu}>
          <MenuIcon fontSize="large" />
        </MenuIconContainer>
        <StyledNavMenuItem menu={menu}>
          <NavLink exact to="/" activeClassName="active">
            Hjem
          </NavLink>
        </StyledNavMenuItem>
        <StyledNavMenuItem menu={menu}>
          <NavLink exact to="/offices" activeClassName="active">
            Kontorer
          </NavLink>
        </StyledNavMenuItem>
        <StyledNavMenuItem menu={menu}>
          <NavLink exact to="/articles" activeClassName="active">
            Fagartikler
          </NavLink>
        </StyledNavMenuItem>
        <StyledNavMenuItem menu={menu}>
          <NavLink exact to="/contact" activeClassName="active">
            Kontakt
          </NavLink>
        </StyledNavMenuItem>
        {!isLoggedIn && (
          <StyledNavMenuItem menu={menu}>
            <NavLink exact to="/login" activeClassName="active">
              Logg inn
            </NavLink>
          </StyledNavMenuItem>
        )}
        {isLoggedIn && (
          <StyledNavMenuItem menu={menu}>
            <StyledButton type="button" onClick={handleLogout}>
              Logg ut
            </StyledButton>
          </StyledNavMenuItem>
        )}
      </StyledNav>
    </>
  );
};

export default Nav;
