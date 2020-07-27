import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import Header from './components/Header'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <LoginForm />
        <SignUpForm/>
      </header>
    </div>
  );
}

export default App;