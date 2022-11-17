import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import styles from '../styles/Navbar.module.scss'
// import { getLoggedInUserId } from "../lib/auth.js";

function Navbar() {

  // const [hamburgerMenu , setHamburgerMenu] = React.useState(false)

  // function handleClick() {
  //   setHamburgerMenu(!hamburgerMenu)
  // }

  // function logout() {
  //   console.log("logout")
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("name");
  //   localStorage.removeItem("_id");
  //   getLoggedInUserId()
  // }
  return (
    <div>
      <div className={styles.topnav}>
        <div className={styles.leftitems}>
          <div className={styles.logo}>EuroLink</div>
        </div>
        <div className={styles.rightitems}>
          <Link to="/Login"><div className={styles.buttons}><p className={styles.buttontext}>Log In</p><i className="fa-regular fa-user"></i></div></Link>
          <div className={styles.buttons}><p className={styles.buttontext}>Menu</p><i className="fa-solid fa-bars"></i></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar