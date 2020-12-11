import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledButton } from '../styles/mainStyles.js';
import {
  StyledFormContainter,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledLabel,
} from '../styles/formStyles.js';
import { useAuthContext } from '../context/AuthProvider';
import { create } from '../utils/emailService.js';

const ContactForm = () => {
  const { user, isLoggedIn } = useAuthContext();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [mailData, setMailData] = useState(null);

  const submitEmail = async () => {
    if (mailData) {
      console.log(mailData);

      const { data } = await create(mailData);
      if (!data.success) {
        setError(data.message);
      } else {
        setSuccess(true);
        setError(null);
      }
    } else {
      console.log('no mail data');
    }
  };

  const newEmail = (event) => {
    event.preventDefault();

    setMailData({
      ...mailData,
      from: user?._id,
      [event.target.name]: event.target.value,
    });

    console.log(mailData);
  };

  return (
    <>
      <StyledFormContainter>
        <StyledForm>
          {isLoggedIn && user && (
            <>
              <StyledLabel htmlFor="email">E-post: </StyledLabel>
              <StyledInput
                required
                type="email"
                placeholder="Din epost"
                name="from"
                value={user?.email}
                onChange={newEmail}
              />
            </>
          )}

          <StyledLabel htmlFor="message">Din beskjed til oss: </StyledLabel>
          <StyledTextArea
            wrap="off"
            required
            overflow="auto"
            name="content"
            onChange={newEmail}
          />
          <StyledButton type="submit" onClick={submitEmail}>
            SEND BESKJED
          </StyledButton>
        </StyledForm>
      </StyledFormContainter>
    </>
  );
};

export default ContactForm;
