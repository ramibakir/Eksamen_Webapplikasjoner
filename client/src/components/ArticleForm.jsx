import React from 'react';
import styled from 'styled-components';
import { StyledButton, StyledContainer } from '../styles/mainStyles.js';
import {
  StyledFormContainter,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledLabel,
  StyledSelect,
} from '../styles/formStyles.js';

const NewCategoryContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
`;

const NewCategoryButton = styled(StyledButton)`
  width: 20%;
`;

const CategorySelector = styled(StyledSelect)`
  width: 70%;
`;

const ArticleForm = () => (
  <>
    <StyledFormContainter>
      <StyledForm>
        <StyledLabel htmlFor="title">Tittel</StyledLabel>
        <StyledInput required type="text" placeholder="Tittel" />

        <StyledLabel htmlFor="ingress">Ingress</StyledLabel>
        <StyledInput required type="text" placeholder="Ingress" />

        <StyledLabel htmlFor="content">Innhold</StyledLabel>
        <StyledTextArea required type="text" placeholder="Innhold" />

        <StyledLabel htmlFor="date">Dato</StyledLabel>
        <StyledInput required type="date" placeholder="Dato" />

        <StyledLabel htmlFor="category">Kategori</StyledLabel>
        <NewCategoryContainer>
          <CategorySelector name="category">
            <option value="test">Just testing</option>
          </CategorySelector>
          <NewCategoryButton>NY</NewCategoryButton>
        </NewCategoryContainer>
        <StyledLabel htmlFor="author">Forfatter</StyledLabel>
        <StyledSelect name="author">
          <option value="author">Rami Bakir</option>
        </StyledSelect>
        <StyledButton>OPPRETT ARTIKKEL</StyledButton>
      </StyledForm>
    </StyledFormContainter>
  </>
);

export default ArticleForm;
