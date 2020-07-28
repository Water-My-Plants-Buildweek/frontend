import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <header>
      <h1>Wet My Plants <span role="img" aria-label="emoji">🌱</span></h1>
      <nav>
        <Link to="/signup" className="link">Sign Up</Link>
        <Link to="/login" className="link">Login</Link>
        <Link to="/plants" className="link">Plants</Link>
        <Link to="/account" className="link">Account</Link>
        <Link to="/logout" className="link">Log Out</Link>
      </nav>
    </header>
  );

}
