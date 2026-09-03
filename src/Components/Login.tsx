import React from 'react';
import { Link } from 'react-router';

export default function Login() {
  return ( 
    <>
      <div>Login</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sign-up">sign up</Link>
        <Link to="/profile">profile</Link>
        <Link to="/dive-logs">dive logs</Link>
      </nav>
    </>
    
  )
}