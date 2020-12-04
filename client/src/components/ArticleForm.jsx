import React from 'react';
import styled from 'styled-components';
import { StyledButton, StyledContainer } from '../styles/MainStyles.js';
import {
  StyledFormContainter,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledLabel,
  StyledSelect,
} from '../styles/FormStyles.js';

const NewCategoryContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
`;

const NewCategoryButton = styled(StyledButton)`
  width: 20%;
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
          <StyledSelect name="category">
            <option value="test">Just testing</option>
          </StyledSelect>
          <NewCategoryButton>NY</NewCategoryButton>
        </NewCategoryContainer>
        <StyledLabel htmlFor="author">Forfatter</StyledLabel>
        <StyledInput required type="text" placeholder="Forfatter" />
        <StyledButton>OPPRETT ARTIKKEL</StyledButton>
      </StyledForm>
    </StyledFormContainter>
  </>
);

export default ArticleForm;
