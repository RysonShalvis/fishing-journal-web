import React from 'react';
import { Link } from 'react-router';

export default function DiveLogs() {
  return ( 
    <>
      <div>DiveLogs</div>
      <nav>
        <Link to="login">login</Link>
        <Link to="sign-up">sign up</Link>
        <Link to="profile">profile</Link>
        <Link to="/">Home</Link>
      </nav>
    </>
    
  )
}