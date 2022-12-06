import React from "react";
import { getLoggedInUserId } from "../lib/auth";
import { Link } from "react-router-dom";
import styles from "../styles/UserDashboard.module.scss"
import Navbar from "../components/Navbar.js"
function UserDashboard() {
  const loggedIn = getLoggedInUserId()
  const user = localStorage.getItem('name')
  const [userData, setUserData] = React.useState(undefined)
  //const arrays = [{ "serviceId": 56545 }, { "serviceId": 111111 } , { "serviceId": 22222 } ]

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/users/${loggedIn}`)
      const json = await res.json()
      setUserData(json)
      console.log(userData)
    }
    getData()


    // function getservice() {
    //   const res = await fetch(`/api/users/${loggedIn}`)
    //     const json = await res.json()
    //     setUserData(json)
    //     console.log(json)
    // }

  } , [])
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
      <div>
        <h3>Upcoming bookings</h3>
        <div>
        </div>
      </div>
    </>
  )
}

export default UserDashboard