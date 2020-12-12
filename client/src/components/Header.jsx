import React from 'react';
import { StyledHeader, StyledHeaderWithImage } from '../styles/mainStyles';
import { useHeader } from '../context/HeaderProvider';

const Header = () => {
  const content = useHeader();
  return (
    <>
      {content.image !== '' ? (
        <StyledHeaderWithImage image={content.image}>
          <h1>{content.title}</h1>
        </StyledHeaderWithImage>
      ) : (
        <StyledHeader>
          <h1>{content.title}</h1>
        </StyledHeader>
      )}
    </>
  );
};

export default Header;
