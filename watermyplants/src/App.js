import React from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";

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
      </Switch>
    </div>
  );
};

export default App;
