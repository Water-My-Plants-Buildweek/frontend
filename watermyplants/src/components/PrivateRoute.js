import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//Determine format for Route, then change as needed
const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return { ...children };
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;