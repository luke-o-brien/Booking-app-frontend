import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from '../styles/Navbar.module.scss'
import { getLoggedInUserId } from "../lib/auth";
import accountimage from "../images/dreamstime_xxl_154591729.jpg"


function Navbar() {
  const [hamburgerMenu , setHamburgerMenu] = React.useState(false)
  const [loggedInMenu, setLoggedInMenu] = React.useState(false)
  const [loggedInUser, setLoggedInUser] = React.useState(getLoggedInUserId)
  const loggedIn  = getLoggedInUserId()
  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location)
  // console.log(loggedIn)
  
  
  function handleClick() {
    setHamburgerMenu(!hamburgerMenu)
  }



  function logout() {
    console.log("logout")
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("_id");
    setLoggedInUser(getLoggedInUserId())
    if (location.pathname === "/dashboard") {
      navigate("/")
    }
  }

  // function loggedUser() {
  //   const login = getLoggedInUserId()
  //   setLoggedIn(login)
  // }
  return ( <>
    <div className={ hamburgerMenu ? `${styles.fullmenu}` : `${styles.topnav}`}>
      <div className={ hamburgerMenu ? `${styles.fullmenutopdiv}` : `${styles.topnavtopdiv}`}>
        <div className={styles.leftitems}>
          <Link to="/"><div className={ hamburgerMenu ? `${styles.fullmenulogo}` : `${styles.logo}`}>EuroLink</div></Link>
        </div>
        <div className={styles.rightitems}>
          { loggedInUser ? 
            <div className={ hamburgerMenu ? `${styles.fullmenubuttons}` : `${styles.loggedinbutton }`} onClick={() => setLoggedInMenu(!loggedInMenu)} >
              <p className={styles.buttontext}>{`Your Account`}</p><i className="fa-solid fa-user"></i>
            </div>
            : 
            <Link to="/Login" className={ hamburgerMenu ? `${styles.fullmenubuttons}` : `${styles.buttons}`} >
              <p className={styles.buttontext}>Log In</p><i className="fa-regular fa-user"></i>
            </Link>}
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
          <Link to="/OurStory"><div className={styles.menuItems}>
            <span className={styles.menuIcon}><i className="fa-solid fa-book"></i> </span>
            <h3 className={styles.bottomlink}>The EuroLink Story</h3>
          </div></Link>
          <Link to="/contact"><div className={styles.menuItems}>
            <span className={styles.menuIcon}><i className="fa-solid fa-headset"></i> </span>
            <h3 className={styles.bottomlink}>Contact Us</h3>
          </div></Link>
        </div>
        <div className={styles.hrcontainer}>
          <div className={styles.hr}></div>
        </div>
        { loggedInUser ? <div className={styles.leftmenucontainer}>
          <div className={styles.welcomecontainer}>
            <h2>Hi Luke</h2>
            <h3>Welcome back!</h3>
          </div>
          <div className={styles.userlinks}>
            <Link to="/dashboard"><h3 className={styles.userlink}>Go To Your Dashboard </h3></Link>  
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
              <Link to="/register" className={styles.accountlink}><p>sign up</p></Link>
              <Link to="/Login" className={styles.accountlink}><p>Log In</p></Link>
            </div>
          </div>
          
        </div>}
        
      </div> : null}
    </div>
    { loggedIn && loggedInMenu ? <div className={styles.loggedIncontainer}>
      <div className={styles.loggedInContent}>
        <Link to="/dashboard" className={styles.loggedindashbutton} >Dashboard</Link>
        <button  className={styles.logoutbutton} onClick={logout}>Log Out</button>
      </div>
    </div> : null}
  </>
  )
}

export default Navbar