import React from "react"
import Navbar from "./Navbar.js"
import styles from "../styles/Home.module.scss"
// import { Link } from "react-router-dom"
import ServiceSearchBox from "./ServiceSearchBox"

function Home() {
  return ( <>
    <section>
      <div className={styles.hero}>
        <div>
          <Navbar />
        </div>
        <div>
          
          < ServiceSearchBox />
        </div>
        
      </div>
      
      <h2 className={styles.title}>London to Den Haag Twice Daily</h2>
      <h3 className={styles.tagline}>Travel affordably and in comfort with Eurolink</h3>
      <div className={styles.buttondiv}>
        <button className={styles.homebuttons}>Manage My Booking</button>
        <button className={styles.homebuttons}>Onboard Experience</button>
        <button className={styles.homebuttons}>FAQ</button>
        <button className={styles.homebuttons}>Future Plans</button>
      </div>
    </section>
  </>
  )
}

export default Home
