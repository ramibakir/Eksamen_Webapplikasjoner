import React from 'react';
import styled from 'styled-components';

export const StyledHeader = styled.h1`
  color: white;
  margin: 0;
  text-align: center;
`;

const BitTitle = ({ content }) => <StyledHeader>{content}</StyledHeader>;

export default BitTitle;
