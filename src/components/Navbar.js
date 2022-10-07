import React from "react";
import { Link } from "react-router-dom";
// import styles from '../styles/Navbar.module.scss'
import { getLoggedInUserId } from "../lib/auth.js";

function Navbar() {

  function logout() {
    console.log("logout")
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("_id");
  }
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <div>
          { getLoggedInUserId() ? <><button onClick={logout}>Log Out</button></> : 
            <>
              <Link to="/register">register</Link> 
              <Link to="/login">Login</Link></> }
        </div>
      </div>
    </div>
  )
}

export default Navbar