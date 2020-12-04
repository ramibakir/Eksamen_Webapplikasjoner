import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { StyledNav, StyledNavMenuItem } from '../styles/MainStyles';

const Nav = () => {
  const [menu, setShowMenu] = useState(false);
  return (
    <>
      <StyledNav>
        <MenuIcon fontSize="large" style={{ display: 'none' }} />
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
      </StyledNav>
    </>
  );
};

export default Nav;
