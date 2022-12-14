import React from "react"
import Navbar from "./Navbar.js"
import styles from "../styles/Home.module.scss"
import ServiceSearchBox from "./ServiceSearchBox"
import { Link } from "react-router-dom"


function Home() {
  return ( <>
    <section>
      <div>
        <Navbar />
        < ServiceSearchBox />
      </div>
      
      <h2 className={styles.title}>London to Den Haag Twice Daily</h2>
      <h3 className={styles.tagline}>Travel affordably and in comfort with Eurolink</h3>
      <div className={styles.christmasbanner}>
        <h1 className={styles.christmabannertitle}>Travelling Home for Christmas?</h1>
        <h3 className={styles.christmabannerblurb}>Christmas is a time to be with family and friends and We are committed to helping you get home over to 
          spend time with the ones you love.</h3>
        <h3 className={styles.christmabannerblurb}>We are running extra service in the run up to christmas, increasing luggage allowance and making our tickets fully 
        flexible to ensure you get home for the celebrations</h3>
        <div className={styles.christmasbannerLink}><Link className={styles.links} to="/FestiveTravel">Festive Travel Information</Link><Link className={styles.links} to="/">View our christmas Timetable</Link></div>
      </div>
      <div className={styles.optionCards}>
        <div className={styles.cardcontainer}>
          <Link  className={styles.card} to="/Festive Travel">
            <div className={styles.cardcontent}>
              <h2 className={styles.cardtitle}>Christmas Service Changes</h2>
              <p className={styles.cardblurb}>Find out how our services are changing over the festive period and about how to plan the perfect festive getaway with Eurolink</p>
            </div>
            <div className={styles.flexbutton}>
              <button className={styles.cardbutton}><i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
          </Link>
          <div className={styles.card2}>
            <div className={styles.cardcontent}>
              <h2 className={styles.cardtitle}>Onboard</h2>
              <p className={styles.cardblurb}>Our busses are equiped with a wide range of facilities which make eurolinks services the most confortable and enjoyable way to travel between the UK and the Netherlands </p>
            </div>
            <div className={styles.flexbutton}>
              <button className={styles.cardbutton}><i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
          </div>
          <div className={styles.card3}>
            <div className={styles.cardcontent}>
              <h2 className={styles.cardtitle}>Our Destinations</h2>
              <p className={styles.cardblurb}>Discover our destinations in Netherlands and the Uk with our custom made trips to help you maximise your time</p>
            </div>
            <div className={styles.flexbutton}>
              <button className={styles.cardbutton}><i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
          </div>
        </div>
        <div className={styles.smallercardcontainer}>
          <div className={styles.smallerCards}>
            <h2>FAQs</h2>
            <p className={styles.smallerp}>Get fast answers to your burning questions about us, our services, experience and your booking</p>
            <div className={styles.flexbutton}>
              <button className={styles.cardbutton}><i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
          </div>
          <div className={styles.smallerCards}>
            <h2 className={styles.smallerh3} >Contact Us</h2>
            <p className={styles.smallerp}>Have a problem? a question? Let us know, find out how best to get in touch with us here </p>
            <div className={styles.flexbutton}>
              <button className={styles.cardbutton}><i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
          </div>
          <div className={styles.smallerCards}>
            <h2 className={styles.smallerh3}>Entry Requirememts</h2>
            <p className={styles.smallerp}>Find out everything you need to know about entering the UK and the Schengen Zone</p>
            <div className={styles.flexbutton}>
              <button className={styles.cardbutton}><i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Home
