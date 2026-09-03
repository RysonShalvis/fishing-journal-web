import React from 'react';
import { Link } from 'react-router';

export default function Profile() {
  return ( 
    <>
      <div>Profile</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">login</Link>
        <Link to="/sign-up">sign up</Link>
        <Link to="/dive-logs">dive logs</Link>
      </nav>
    </>
    
  )
}
