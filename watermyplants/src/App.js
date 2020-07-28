import React from 'react';
import AccountForm from './components/AccountForm.js';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Header from './components/Header';
import PlantsPage from './components/PlantsPage';
import { Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LogOutPage from './components/LogOutPage';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Switch>
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

export default App;
