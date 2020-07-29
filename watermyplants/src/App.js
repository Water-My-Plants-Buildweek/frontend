import React, { useEffect } from 'react';
import AccountForm from './components/AccountForm.js';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Header from './components/Header';
import PlantsPage from './components/PlantsPage';
import { Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import RedirectRoute from './components/RedirectRoute';
import LogOutPage from './components/LogOutPage';
import { connect } from 'react-redux';
import { setLoggedIn, setLoggedOut } from './actions/accountActions';

const App = (props) => {

  useEffect(() => {
    if (localStorage.getItem('token')) {
      props.setLoggedIn();
    } else {
      props.setLoggedOut();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Switch>
        <RedirectRoute exact path='/' />
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/signup">
          <SignUpForm />
        </Route>
        <PrivateRoute path="/account">
          <AccountForm />
        </PrivateRoute>
        <PrivateRoute path='/plants'>
          <PlantsPage />
        </PrivateRoute>
        <Route path='/logout'>
          <LogOutPage />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.accountReducer.loggedIn
  }
}

export default connect(mapStateToProps, { setLoggedIn, setLoggedOut })(App);
