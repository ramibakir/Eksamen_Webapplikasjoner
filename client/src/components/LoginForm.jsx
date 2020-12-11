import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Alert,
  AlertTitle,
  CloseButton,
  FormControl,
  FormErrorMessage,
  AlertIcon,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { StyledButton } from '../styles/mainStyles.js';
import {
  StyledFormContainter,
  StyledForm,
  StyledInput,
  StyledLabel,
} from '../styles/formStyles.js';
import { login } from '../utils/authService';
import { useAuthContext } from '../context/AuthProvider';

const LoginInput = styled(StyledInput)`
  width: 100%;
`;

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
            <Alert status="success">
              <AlertIcon w={20} h={20} />
              Du er logget inn. Omdirigerer til forsiden ...
            </Alert>
          )}
          {error && closeBtnState && (
            <Alert mb={4} color="red">
              <AlertIcon w={20} h={20} />
              {error &&
                Array.isArray(error) &&
                error.map((err) => (
                  <AlertTitle variant="subtle" mr={2}>
                    {err.message}
                  </AlertTitle>
                ))}
              {error && !Array.isArray(error) && (
                <AlertTitle mr={2}>{error}</AlertTitle>
              )}
              <CloseButton
                position="absolute"
                right="8px"
                height="100%"
                onClick={() => setCloseBtnState(false)}
              />
            </Alert>
          )}
          <FormControl isInvalid={errors.email}>
            <StyledLabel htmlFor="email">Epost</StyledLabel>
            <FormErrorMessage valid={!errors.email}>
              Fyll inn e-post
            </FormErrorMessage>
            <LoginInput
              id="email"
              type="email"
              placeholder="Din epost"
              name="email"
              ref={register({
                required: true,
              })}
            />
          </FormControl>
          <FormControl margin="25px 0" isInvalid={errors.password}>
            <StyledLabel htmlFor="password">Passord</StyledLabel>
            <FormErrorMessage valid={!errors.password}>
              Passord må fylles inn og bestå av minst 8 tegn
            </FormErrorMessage>
            <LoginInput
              id="password"
              type="password"
              placeholder="Ditt passord"
              name="password"
              ref={register({
                required: true,
                minLength: 8,
              })}
            />
          </FormControl>

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
