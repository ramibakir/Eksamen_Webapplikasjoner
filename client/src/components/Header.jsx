import React from 'react';
import { StyledHeader } from '../styles/mainStyles';
import { useHeader } from '../context/HeaderProvider';

const Header = () => {
  const content = useHeader();
  return (
    <StyledHeader>
      <h1>{content}</h1>
    </StyledHeader>
  );
};

export default Header;
