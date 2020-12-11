import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { useSetHeader } from '../context/HeaderProvider';

const Contact = () => {
  const setHeader = useSetHeader();

  useEffect(() => {
    const setHeaderContent = () => {
      setHeader('Kontakt oss');
    };
    setHeaderContent();
  }, []);

  return (
    <>
      <ContactForm />
    </>
  );
};

export default Contact;
