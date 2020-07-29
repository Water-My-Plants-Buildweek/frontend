import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoggedIn } from '../actions/accountActions';

const PrivateRoute = ({ children, setLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          setLoggedIn()
          return { ...children };
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default connect(null, { setLoggedIn })(PrivateRoute);