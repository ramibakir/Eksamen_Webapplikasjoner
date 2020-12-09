import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledButton } from '../styles/mainStyles.js';
import {
  StyledFormContainter,
  StyledForm,
  StyledInput,
  StyledLabel,
} from '../styles/formStyles.js';
import { create } from '../utils/userService';

const SignUpForm = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const createUser = () => {
    create(user);
    history.push('/login');
  };

  return (
    <>
      <StyledFormContainter>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel htmlFor="name">Navn</StyledLabel>
          <StyledInput
            type="text"
            required
            placeholder="Fornavn og etternavn"
            name="name"
            value={user.name}
            onChange={handleSubmit}
          />

          <StyledLabel htmlFor="email">Epost</StyledLabel>
          <StyledInput
            type="email"
            required
            placeholder="Din epost"
            name="email"
            value={user.email}
            onChange={handleSubmit}
          />

          <StyledLabel htmlFor="password">Passord</StyledLabel>
          <StyledInput
            type="password"
            required
            placeholder="Ditt passord"
            name="password"
            value={user.password}
            onChange={handleSubmit}
          />

          <StyledButton
            style={{ margin: '30px 0 50px 0' }}
            onClick={createUser}
          >
            REGISTRER DEG
          </StyledButton>
        </StyledForm>
      </StyledFormContainter>
    </>
  );
};

export default SignUpForm;
