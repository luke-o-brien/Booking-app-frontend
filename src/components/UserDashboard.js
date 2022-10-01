import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/UserDashboard.module.scss"

function UserDashboard() {
  return (
    <>
      <div>
        <h1>Hi Luke </h1>
        <h3>welcome to your dashboard</h3>
      </div>
      <div>
        <button className={styles.optionButton}>Your Upcoming bookings</button>
        <button className={styles.optionButton}>Past Bookings</button>
        <Link to='/passwordchange'>
          <button className={styles.optionButton}>Change password</button>
        </Link>
        <button className={styles.optionButton}>Edit Account Preferences </button>
      </div>
    </>
  )
}

export default UserDashboard