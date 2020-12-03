import React from 'react';
import styled from 'styled-components';
import {
  StyledFormContainter,
  StyledForm,
  StyledInput,
  StyledTextArea,
} from '../styles/FormStyles.js';

const ContactForm = () => (
  <>
    <StyledFormContainter>
      <StyledForm>
        <StyledInput required type="text" maxLength="100" />
        <StyledInput required type="email" />
        <StyledTextArea />
      </StyledForm>
    </StyledFormContainter>
  </>
);

export default ContactForm;
