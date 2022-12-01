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
import YourBookings from './components/YourBookings.js'
import OnboardExperience from './components/Informationpages.js/OnboardExperience.js'
import EuroLinkStory from './components/Informationpages.js/EurolinkStory.js'
import ContactUs from './components/Informationpages.js/ContactUs.js'
import FestiveTravel from './components/Informationpages.js/FestiveTravel.js'

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
        <Route path="/YourBookings" element={<YourBookings/>} />
        <Route path="/OnboardExperience" element={<OnboardExperience />} />
        <Route path="/OurStory" element={<EuroLinkStory />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/FestiveTravel" element={< FestiveTravel/>} />
      </Routes>
    </Router>
  )
}

export default App
