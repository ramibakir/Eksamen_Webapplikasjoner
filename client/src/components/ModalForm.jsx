import React from 'react';
import { StyledButton } from '../styles/mainStyles.js';
import {
  StyledFormContainter,
  StyledInput,
  StyledLabel,
  ModalOverlay,
  Modal,
} from '../styles/formStyles.js';

const ModalForm = ({
  setNewCategory,
  submitNewCategory,
  toggleNewCategoryModal,
}) => {
  const updateDataFromInput = (event) => {
    setNewCategory({ name: event.target.value });
  };

  return (
    <>
      <ModalOverlay>
        <Modal>
          <StyledButton
            onClick={() => toggleNewCategoryModal()}
            style={{ padding: '5px 10px', float: 'right' }}
          >
            x
          </StyledButton>
          <StyledFormContainter>
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
          </StyledFormContainter>
        </Modal>
      </ModalOverlay>
    </>
  );
};

export default ModalForm;
