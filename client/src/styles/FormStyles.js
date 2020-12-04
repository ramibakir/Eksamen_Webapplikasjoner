import styled from 'styled-components';
import { StyledContainer } from './MainStyles.js';

export const StyledInput = styled.input`
  font-size: 1em;
  border: 2px solid black;
  border-radius: 5px;
  margin: 10px;
  height: 50px;
  padding: 10px;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
`;

export const StyledLabel = styled.label`
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 3px;
`;

export const StyledFormContainter = styled(StyledContainer)`
  margin: 0 auto;
  width: 100%;
`;

export const StyledForm = styled.form`
  margin: auto;
  width: 520px;
  height: 500px;
  padding: 10px;
  border-radius: 10px;

  display: grid;
  grid-row-gap: 10px;
  grid-template-rows: auto auto auto auto auto 1fr;
`;

export const StyledTextArea = styled.textarea`
  width: 500px;
  height: 120px;
  border: 2px solid black;
  padding: 5px;
  border-radius: 4px;
`;
