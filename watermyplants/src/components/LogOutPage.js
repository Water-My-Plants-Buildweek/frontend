import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LogOutPage = () => {

  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem('token');
    history.push('/login');
  }, []);

  return (
    null
  );
};

export default LogOutPage;