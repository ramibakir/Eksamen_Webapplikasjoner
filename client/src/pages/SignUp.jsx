import React, { useEffect } from 'react';
import SignUpForm from '../components/SignUpForm';
import { useSetHeader } from '../context/HeaderProvider';

const SignUp = () => {
  const setHeader = useSetHeader();

  useEffect(() => {
    const setHeaderContent = () => {
      setHeader({ title: 'Register ny bruker', image: '' });
    };
    setHeaderContent();
  }, []);
  return <SignUpForm />;
};
export default SignUp;
