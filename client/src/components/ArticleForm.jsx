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
  align-content: center;
`;

const NewCategoryButton = styled(StyledButton)`
  //width: 100%;
  //height: 50px;
  margin: 10px 0 30px 10px;
  flex: 1 1 auto;
  //padding: 10px;
`;

const CategorySelector = styled(StyledSelect)`
  width: 70%;
  margin: 10px 0 30px 0;
`;

const AuthorSelector = styled(StyledSelect)`
  width: 100%;
  margin: 10px 0 30px 0;
`;

const ArticleForm = () => (
  <>
    <StyledFormContainter>
      <StyledForm>
        <StyledLabel htmlFor="title">Tittel</StyledLabel>
        <StyledInput required type="text" placeholder="Tittel" />

        <StyledLabel htmlFor="ingress">Ingress</StyledLabel>
        <StyledInput required type="text" placeholder="Ingress" />

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
        <AuthorSelector name="author">
          <option value="author">Rami Bakir</option>
        </AuthorSelector>
        <StyledLabel htmlFor="content">Innhold</StyledLabel>
        <StyledTextArea required type="text" placeholder="Innhold" />
        <StyledButton style={{ margin: '30px 0 50px 0' }}>
          OPPRETT ARTIKKEL
        </StyledButton>
      </StyledForm>
    </StyledFormContainter>
  </>
);

export default ArticleForm;
