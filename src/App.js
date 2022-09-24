import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Register from './components/Register.js'
import Login from './components/Login.js'
import UserDashboard from './components/UserDashboard.js'
import Navbar from './components/Navbar.js'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
