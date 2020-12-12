import styled from 'styled-components';
import { StyledContainer, StyledCenteredFlex } from './mainStyles.js';

export const StyledSelect = styled.select`
  width: 20%;
  padding: 16px 20px;
  border: 1px solid #3b6978;
  border-radius: 4px;
  background-color: #f1f1f1;
  margin: 0 10px;
`;

export const StyledInput = styled.input`
  font-size: 1em;
  border: 2px solid black;
  border-radius: 5px;
  margin: 10px;
  height: 50px;
  padding: 10px;
  margin: 10px 0 30px 0;
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

export const StyledTextArea = styled.textarea`
  height: 200px;
  border: 2px solid black;
  padding: 5px;
  border-radius: 4px;
  margin: 10px 0 30px 0;
`;

export const StyledForm = styled.form`
  margin: auto;
  width: 40%;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const ModalOverlay = styled(StyledCenteredFlex)`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Modal = styled.div`
  box-shadow: 0px 1px 8px #00000029;
  border-radius: 8px;
  width: 30%;
  background-color: white;
  padding: 20px;
`;
