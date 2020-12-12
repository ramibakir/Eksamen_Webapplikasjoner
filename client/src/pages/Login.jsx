import React, { useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import { useSetHeader } from '../context/HeaderProvider';

const Login = () => {
  const setHeader = useSetHeader();

  useEffect(() => {
    const setHeaderContent = () => {
      setHeader({ title: 'Logg inn', image: '' });
    };
    setHeaderContent();
  }, []);
  return <LoginForm />;
};

export default Login;
