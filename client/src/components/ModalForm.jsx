import React from 'react';
import styled from 'styled-components';
import { StyledButton, StyledContainer } from '../styles/MainStyles.js';
import {
  StyledFormContainter,
  StyledForm,
  StyledInput,
  StyledLabel,
} from '../styles/FormStyles.js';

const ModalForm = () => (
  <>
    <StyledFormContainter>
      <StyledForm>
        <StyledLabel htmlfor="newCategory">Ny Kategori</StyledLabel>
        <StyledInput required type="text" placeholder="Kategorinavn" />
        <StyledButton>OPPRETT</StyledButton>
      </StyledForm>
    </StyledFormContainter>
  </>
);
