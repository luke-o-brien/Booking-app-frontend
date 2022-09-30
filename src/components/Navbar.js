import React from "react";
import { Link } from "react-router-dom";
// import styles from '../styles/Navbar.module.scss'

function Navbar() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/register">register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Navbar