import React from 'react';
import { Link } from 'react-router';

export default function SignUp() {
  return ( 
    <>
      <div>Sign Up</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">login</Link>
        <Link to="/profile">profile</Link>
        <Link to="/dive-logs">dive logs</Link>
      </nav>
    </>
    
  )
}
