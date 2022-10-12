import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Navbar.module.scss'
import { getLoggedInUserId } from "../lib/auth.js";

function Navbar() {

  const [hamburgerMenu , setHamburgerMenu] = React.useState(false)

  function handleClick() {
    setHamburgerMenu(!hamburgerMenu)
  }

  function logout() {
    console.log("logout")
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("_id");
  }
  return (
    <>
      <div className={styles.hamburgerContainer}>
        <i className="fa-solid fa-bars fa-2x" onClick={handleClick} ></i><h2 className={styles.menutext}>Menu</h2>
      </div>
      <nav className={ hamburgerMenu ? styles.navbarActive : styles.navbar}>
        <div className={styles.exititem}>
          <i className="fa-solid fa-x fa-2x" onClick={handleClick} ></i>
        </div>
        <div className={hamburgerMenu ? styles.navcontentActive : styles.navcontent}>
          { getLoggedInUserId() ? <><div className={styles.accountdetails}><h2>Welcome back</h2><h3>Luke</h3>
            <Link to="/dashboard" className={styles.navbar_item} onClick={handleClick}>
            My Account
            </Link>
            <Link to="/" className={styles.navbar_item} onClick={logout}>Log Out</Link></div></> : 
            <>
              <Link to="/register" className={styles.navbar_item} onClick={handleClick}>
                register
              </Link> 
              <Link to="/login" className={styles.navbar_item} onClick={handleClick}>
                Login
              </Link>
            </> 
          }
          <Link to="/" className={styles.navbar_item} onClick={handleClick}>
          Home
          </Link>
          <Link to="/planjourney" className={styles.navbar_item} onClick={handleClick}>
          Plan a Journey
          </Link>
          
        </div>
      </nav>
    </>
  )
}

export default Navbar