import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Register from './components/Register.js'
import Login from './components/Login.js'
import UserDashboard from './components/UserDashboard.js'
import PasswordChange from './components/PasswordChange.js'
import ServiceSearch from './components/ServiceSearch.js'
import BookingForm from './components/BookingForm.js'
import SearchScreen from './components/SearchScreen.js'
import BookingConfirmation from './components/BookingConfirmation.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/passwordchange" element={<PasswordChange />} />
        <Route path="/planjourney" element={<ServiceSearch />} />
        <Route path="/BookingForm/:serviceId" element={<BookingForm /> } />
        <Route path="/SearchScreen" element={<SearchScreen />} />
        <Route path="/BookingConfirmed" element={<BookingConfirmation />} />
      </Routes>
    </Router>
  )
}

export default App
