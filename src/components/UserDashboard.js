import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/UserDashboard.module.scss"
import Navbar from "../components/Navbar.js"
function UserDashboard() {

  const user = localStorage.getItem('name')

  return (
    <>
      <Navbar />
      <div className={styles.headingcontainer}>
        <h1 className={styles.welcomemessage}>Hi {user.charAt(0).toUpperCase() + user.slice(1).toLowerCase()}</h1>
        <h3 className={styles.subwelcome}>welcome to your dashboard</h3>
      </div>
      <div className={styles.linkContainer}>
        <Link to='/YourBookings'>
          <button className={styles.optionButton}>Your Bookings</button>
        </Link>
        <Link to='/passwordchange'>
          <button className={styles.optionButton}>Change password</button>
        </Link>
        <button className={styles.optionButton}>Edit Account Preferences </button>
      </div>
    </>
  )
}

export default UserDashboard