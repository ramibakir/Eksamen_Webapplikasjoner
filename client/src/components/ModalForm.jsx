import React from 'react';
import { StyledButton } from '../styles/mainStyles.js';
import {
  StyledFormContainter,
  StyledForm,
  StyledInput,
  StyledLabel,
} from '../styles/formStyles.js';

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

export default ModalForm;
