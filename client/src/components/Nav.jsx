import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  StyledNav,
  StyledNavMenu,
  StyledNavMenuItem,
} from '../styles/MainStyles';

const Nav = () => (
  <StyledNav>
    <StyledNavMenu>
      <StyledNavMenuItem>
        <NavLink exact to="/" activeClassName="active">
          Hjem
        </NavLink>
      </StyledNavMenuItem>
      <StyledNavMenuItem>
        <NavLink exact to="/offices" activeClassName="active">
          Kontorer
        </NavLink>
      </StyledNavMenuItem>
      <StyledNavMenuItem>
        <NavLink exact to="/articles" activeClassName="active">
          Fagartikler
        </NavLink>
      </StyledNavMenuItem>
      <StyledNavMenuItem>
        <NavLink exact to="/contact" activeClassName="active">
          Kontakt
        </NavLink>
      </StyledNavMenuItem>
      <StyledNavMenuItem>
        <NavLink exact to="/login" activeClassName="active">
          Logg inn
        </NavLink>
      </StyledNavMenuItem>
    </StyledNavMenu>
  </StyledNav>
);

export default Nav;
