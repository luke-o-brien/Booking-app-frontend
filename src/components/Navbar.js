import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import styles from '../styles/Navbar.module.scss'
// import { getLoggedInUserId } from "../lib/auth.js";
import { getLoggedInUserId } from "../lib/auth";
import accountimage from "../images/dreamstime_xxl_154591729.jpg"

function Navbar() {
  const [hamburgerMenu , setHamburgerMenu] = React.useState(false)
  const [loggedInMenu, setLoggedInMenu] = React.useState(false)
  const loggedIn  = getLoggedInUserId()
  console.log(loggedIn)
  
  
  function handleClick() {
    setHamburgerMenu(!hamburgerMenu)
  }



  function logout() {
    console.log("logout")
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("_id");
    getLoggedInUserId()
  }

  // function loggedUser() {
  //   const login = getLoggedInUserId()
  //   setLoggedIn(login)
  // }
  return (
    <div className={ hamburgerMenu ? `${styles.fullmenu}` : `${styles.topnav}`}>
      <div className={ hamburgerMenu ? `${styles.fullmenutopdiv}` : `${styles.topnavtopdiv}`}>
        <div className={styles.leftitems}>
          <div className={ hamburgerMenu ? `${styles.fullmenulogo}` : `${styles.logo}`}>EuroLink</div>
        </div>
        <div className={styles.rightitems}>
          { loggedIn ? 
            <div className={ hamburgerMenu ? `${styles.fullmenubuttons}` : `${styles.loggedinbutton }`} onClick={() => setLoggedInMenu(!loggedInMenu)} >
              <p className={styles.buttontext}>{`Your Account`}</p><i className="fa-solid fa-user"></i>
            </div>
            : 
            <Link to="/Login" className={ hamburgerMenu ? `${styles.fullmenubuttons}` : `${styles.buttons}`} >
              <p className={styles.buttontext}>Log In</p><i className="fa-regular fa-user"></i>
            </Link>}
          { loggedIn && loggedInMenu ? <div className={styles.loggedIncontainer}>
            <Link to="/dashboard" >Dashboard</Link>
            <button onClick={logout}>Log Out</button>
          </div> : null}
          { hamburgerMenu ? <div className={styles.fullmenubuttons} onClick={handleClick}><p className={styles.buttontext}>Close</p> <i className="fa-solid fa-x"></i></div> : <div className={ hamburgerMenu ? `${styles.fullmenubuttons}` : `${styles.buttons}`} onClick={handleClick}><p className={styles.buttontext}>Menu</p><i className="fa-solid fa-bars"></i></div>}
        </div>
      </div>
      { hamburgerMenu ? <div className={styles.fullmenubottom}>
        <div className={styles.leftmenucontainer}>
          <Link to="/SearchScreen"><div className={styles.menuItems}>
            <span className={styles.menuIcon}><i className="fa-solid fa-ticket fa-fw"></i></span>
            <h3 className={styles.bottomlink}>Plan a Journey</h3>
          </div></Link>
          <Link to="/OnboardExperience"><div className={styles.menuItems}>
            <span className={styles.menuIcon}><i className="fa-solid fa-van-shuttle fa-fw"></i></span>
            <h3 className={styles.bottomlink}> Onboard Experience</h3>
          </div></Link>
          <div className={styles.menuItems}>
            <span className={styles.menuIcon}><i className="fa-solid fa-book"></i> </span>
            <h3 className={styles.bottomlink}>The EuroLink Story</h3>
          </div>
          <div className={styles.menuItems}>
            <span className={styles.menuIcon}><i className="fa-solid fa-headset"></i> </span>
            <h3 className={styles.bottomlink}>Contact Us</h3>
          </div>
        </div>
        <div className={styles.hrcontainer}>
          <div className={styles.hr}></div>
        </div>
        { loggedIn ? <div className={styles.leftmenucontainer}>
          <div className={styles.welcomecontainer}>
            <h2>Hi Luke</h2>
            <h3>Welcome back!</h3>
          </div>
          <div className={styles.userlinks}>
            <h3 className={styles.userlink}>Go To Your Dashboard </h3>    
            <span className={styles.userIcon}><i className="fa-solid fa-arrow-right-long"></i></span>
          </div>
        </div> : <div className={styles.rightmenucontainer}>
          <div>
            <h2 className={styles.signuplink}>Planning your next adventure is easier with an account</h2>
          </div>
          <div>
            <img className={styles.accountimages} src={accountimage} />
          </div>
          <div>
            
            <div className={styles.logsignbox}>
              <p className={styles.accountlink}>sign up</p>
              <p className={styles.accountlink}>Log in</p>
            </div>
          </div>
          
        </div>}
        
      </div> : null}
    </div>
  )
}

export default Navbar