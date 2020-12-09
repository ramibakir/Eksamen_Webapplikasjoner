import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { StyledButton } from '../styles/mainStyles.js';
import {
  StyledFormContainter,
  StyledForm,
  StyledInput,
  StyledLabel,
} from '../styles/formStyles.js';
import { login } from '../utils/authService';
import { useAuthContext } from '../context/AuthProvider';

const LoginForm = () => {
  const [closeBtnState, setCloseBtnState] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { setUser, isLoggedIn } = useAuthContext();
  const history = useHistory();
  const { state } = useLocation();

  const { register, errors, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (isLoggedIn && state) {
      history.push(state?.from.pathname);
    }
  }, [isLoggedIn, state]);

  const onSubmit = async (credentials) => {
    const { data } = await login(credentials);
    if (!data.success) {
      setCloseBtnState(true);
      setError(data.message);
    } else {
      const user = data?.user;
      const expire = JSON.parse(window.atob(data.token.split('.')[1])).exp;
      setUser({ ...user, expire });
      setSuccess(true);
      history.push('/');
    }
  };

  return (
    <>
      <StyledFormContainter>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {success && (
            <p status="success">
              Du er logget inn. Omdirigerer til forsiden...
            </p>
          )}
          <StyledLabel htmlFor="email">Epost</StyledLabel>
          <StyledInput
            type="email"
            placeholder="Din epost"
            name="email"
            ref={register({
              required: true,
            })}
          />

          <StyledLabel htmlFor="password">Passord</StyledLabel>
          <StyledInput
            type="password"
            placeholder="Ditt passord"
            name="password"
            ref={register({
              required: true,
              minLength: 3,
            })}
          />

          <StyledButton
            style={{ margin: '30px 0 50px 0' }}
            isLoading={formState.isSubmitting}
            type="submit"
          >
            LOGG INN
          </StyledButton>
        </StyledForm>
      </StyledFormContainter>
      ;
    </>
  );
};

export default LoginForm;
