import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../styles/MainStyles.js';
import {
  StyledFormContainter,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledLabel,
} from '../styles/FormStyles.js';

const ContactForm = () => (
  <>
    <StyledFormContainter>
      <StyledForm>
        <StyledLabel htmlFor="fullname">Fullt navn: </StyledLabel>
        <StyledInput required type="text" maxLength="100" />
        <StyledLabel htmlFor="email">E-post: </StyledLabel>
        <StyledInput required type="email" />
        <StyledLabel htmlFor="message">Din beskjed til oss: </StyledLabel>
        <StyledTextArea wrap="off" required overflow="auto" />
        <StyledButton>SEND BESKJED</StyledButton>
      </StyledForm>
    </StyledFormContainter>
  </>
);

export default ContactForm;
