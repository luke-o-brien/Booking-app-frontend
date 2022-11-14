import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/UserDashboard.module.scss"

function UserDashboard() {

  const user = localStorage.getItem('name')

  return (
    <>
      <div>
        <h1>Hi {user.charAt(0).toUpperCase() + user.slice(1).toLowerCase()}</h1>
        <h3>welcome to your dashboard</h3>
      </div>
      <div>
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