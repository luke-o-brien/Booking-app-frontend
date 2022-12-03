import React from "react"
import Navbar from "../Navbar.js"
import styles from "../../styles/stylesInformationpages/OnboardExperience.module.scss"
import UsbImage from "../../images/dreamstime_xxl_242106343.jpg"
import ACImage from "../../images/dreamstime_xxl_118443033.jpg"
//import seatbackImage from "../../images/lux-express-salon-1024x660.jpeg"
import seatImage from "../../images/shutterstock_684502618.jpg"
import busexteriorimage from "../../images/dreamstime_xxl_164819563.jpg"
import phoneimage from "../../images/dreamstime_xxl_154591729.jpg"
import tvimage from "../../images/684811444-huge.jpg"
function OnboardExperience() {

  const [facility, setfacility] = React.useState("seat")

  return (
    <>
      <Navbar/>
      <div className={styles.TopImage}>
        <h2 className={styles.herotext}>Onboard Experience</h2>
      </div>
      <div className={styles.tagline}>
        
      </div>
      <div className={styles.bustype}>
        <div className={styles.infoside}>
          <h3>The most confortable Bus to Europe</h3>
          <p>Our Busses are the Newest on the road and we have designed them around our passengers to provide with the facilities to keep you confortable and entertained during your journey</p>
        </div>
        <div className={styles.imageside}>
          <img src={busexteriorimage}></img>
        </div>
      </div>
      <div>
        <div>
          <h3 className={styles.facilitiestitle}>Onboard Facilities</h3>
          <p className={styles.facilitiestagline}>Click Below to learn more about the facilities available on our services.</p>
        </div>
        <div className={styles.facilitiesdiv}>
          <div className={ facility === "seat" ? styles.facilitiesicondivactive : styles.facilitiesicondiv} onClick={() => setfacility("seat")}><i className="fa-solid fa-chair"></i></div>
          <div className={ facility === "power" ? styles.facilitiesicondivactive : styles.facilitiesicondiv} onClick={() => setfacility("power")}><i className="fa-solid fa-plug-circle-bolt"></i></div>
          <div className={ facility === "ac" ? styles.facilitiesicondivactive : styles.facilitiesicondiv} onClick={() => setfacility("ac")}><i className="fa-regular fa-snowflake"></i></div>
          <div className={ facility === "wifi" ? styles.facilitiesicondivactive : styles.facilitiesicondiv} onClick={() => setfacility("wifi")} ><i className="fa-solid fa-wifi"></i></div>
          <div className={ facility === "tv" ? styles.facilitiesicondivactive : styles.facilitiesicondiv} onClick={() => setfacility("tv")}><i className="fa-solid fa-tv"></i></div>
          <div className={ facility === "bathroom" ? styles.facilitiesicondivactive : styles.facilitiesicondiv} onClick={() => setfacility("bathroom")}><i className="fa-solid fa-restroom"></i></div>
          <div className={ facility === "wheelchair" ? styles.facilitiesicondivactive : styles.facilitiesicondiv} onClick={() => setfacility("wheelchair")}><i className="fa-solid fa-wheelchair"></i></div>
        </div>
        <div>
          { facility === "seat" ? <div className={styles.renderfacilities}><div className={styles.facilitiesblurb}><h2>Your Seat</h2></div><img className={styles.facilitiesimage} src={seatImage}></img></div> : null}
          { facility === "power" ? <div className={styles.renderfacilities}><div className={styles.facilitiesblurb}><h2>At seat Power</h2></div><img className={styles.facilitiesimage} src={UsbImage}></img></div> : null}
          { facility === "ac" ? <div className={styles.renderfacilities}><div className={styles.facilitiesblurb}><h2>Climate control</h2></div><img className={styles.facilitiesimage} src={ACImage}></img></div> : null}
          { facility === "wifi" ? <div className={styles.renderfacilities}><div className={styles.facilitiesblurb}><h2>Free Wifi</h2></div><img className={styles.facilitiesimage} src={phoneimage}></img></div> : null}
          { facility === "tv" ? <div className={styles.renderfacilities}><div className={styles.facilitiesblurb}><h2>Seat Back Entertainment</h2></div><img className={styles.facilitiesimage} src={tvimage}></img></div> : null}
          {/* <img src={seatbackImage}></img>
          <img src={seatImage}></img> */}
        </div>
        <div>
          <h2>full list of facilities</h2>
        </div>

      </div>
      
    </>
  )

}

export default OnboardExperience