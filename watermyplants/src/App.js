import React from 'react';
import './App.css';
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      
        <SignInForm />
        <SignUpForm />
      </header>
    </div>
  );
}

export default App;