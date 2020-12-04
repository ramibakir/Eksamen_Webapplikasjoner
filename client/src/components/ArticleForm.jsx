import React from 'react';
import { StyledButton } from '../styles/MainStyles.js';
import {
  StyledFormContainter,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledLabel,
  StyledSelect,
} from '../styles/FormStyles.js';

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
        <StyledSelect name="category">
          <option value="test">Just testing</option>
        </StyledSelect>

        <StyledLabel htmlFor="author">Forfatter</StyledLabel>
        <StyledInput required type="text" placeholder="Forfatter" />

        <StyledButton>LAGRE</StyledButton>
      </StyledForm>
    </StyledFormContainter>
  </>
);

export default ArticleForm;
