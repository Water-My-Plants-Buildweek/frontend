import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      
        <LoginForm />
        <SignUpForm/>
      </header>
    </div>
  );
}

export default App;