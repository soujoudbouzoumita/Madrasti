import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const LogoutPage = () => {
  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }, []);

  return <Navigate to="/" />;
};

export default LogoutPage;
