import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <header>
      <h1>Wet My Plants 🌱</h1>
      <nav>
        <Link to="/signup" className="link">Sign Up</Link>
        <Link to="/login" className="link">Login</Link>
        <Link to="" className="link">Plants</Link>
        <Link to="" className="link">Account</Link>
        <Link to="" className="link">Log Out</Link>
      </nav>
    </header>
  );

}
