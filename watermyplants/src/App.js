import React from 'react';
import AccountForm from './components/AccountForm.js'
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Header from './components/Header';
import PlantsPage from './components/PlantsPage'
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <PlantsPage/>

      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/signup">
          <SignUpForm />
        </Route>
        <Route path="/account">
          <AccountForm />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
