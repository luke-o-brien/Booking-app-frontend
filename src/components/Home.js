import React from "react"
import Navbar from "./Navbar.js"
import styles from "../styles/Home.module.scss"
import { Link } from "react-router-dom"

function Home() {
  return ( <>
    <section>
      <Navbar />
      <div>
        <div>
          <Link to="/planjourney" className={styles.planbutton}>
          Plan your Next Journey
          </Link>
        </div>
      </div>
    </section>
  </>
  )
}

export default Home
