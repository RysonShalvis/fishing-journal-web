import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router";
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Profile from './Components/Profile';
import DiveLogs from './Components/DiveLogs';


import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="profile" element={<Profile />} />
      <Route path="dive-logs" element={<DiveLogs />} />
    </Routes>

  )
}

export default App
