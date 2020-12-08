import React from 'react';
import { StyledButton } from '../styles/mainStyles.js';
import {
  StyledFormContainter,
  StyledForm,
  StyledInput,
  StyledLabel,
} from '../styles/formStyles.js';

const ModalForm = ({ setNewCategory, submitNewCategory }) => {
  const updateDataFromInput = (event) => {
    setNewCategory({ name: event.target.value });
  };

  return (
    <>
      <StyledFormContainter>
        <StyledForm>
          <StyledLabel htmlfor="newCategory">Ny Kategori</StyledLabel>
          <StyledInput
            required
            type="text"
            placeholder="Kategorinavn"
            onChange={updateDataFromInput}
          />
          <StyledButton onClick={() => submitNewCategory()}>
            OPPRETT
          </StyledButton>
        </StyledForm>
      </StyledFormContainter>
    </>
  );
};

export default ModalForm;
