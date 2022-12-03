import React from "react"
import Navbar from "../Navbar.js"
import styles from "../../styles/stylesInformationpages/FestiveTravel.module.scss"
function FestiveTravel() {

  window.scrollTo(0, 0);


  return (
    <>
      <Navbar/>
      <h2></h2>
      <div className={styles.mainimg}></div>
      <div className={styles.contentcontainer}>
        <h2 className={styles.title}>Festive Travel Information</h2>
        <p className={styles.subtitles}>We Know how important spending the holidays with loved ones is and therefore 
      at Eurolink we have strived to make it as easy as possible for you to travel to see the ones you love this festive season.</p>
        <div className={styles.minimenucontainer}>
          <h2 className={styles.minimenutitle}>{`What we're doing this December`}</h2>
          <ul className={styles.minimenu}> 
            <li>Extra Services</li>
            <li>Flexible Ticketing</li>
            <li>Festivities Onboard</li>
            <li>Festive Timetable</li>
            <li>Christmas Travel Inspiration</li>
          </ul>
        </div>
        <div>
          <div className={styles.topiccontainer}>
            <h3 className={styles.topicHeading}>Extra Services</h3>
            <p className={styles.topictext}>We are increasing the number of daily seats on our services in both directions from the 14th December 
            from two to three in each direction. From the 20th to the 23rd this will increase to four daily services. 
            In order to offer these extra departures some services will be operated by our partner operators and some 
            facilities may not be available</p>
          </div>
          <div className={styles.topiccontainer}>
            <h3 className={styles.topicHeading}>Flexible Ticketing</h3>
            <p className={styles.topictext}>Travelling around this time of year can be stressfull and so we wanted to do our bit to make it just 
            that little bit easier. Tickets dated between the 4th of December and the 4th of January are fully flexible. This means if you cannot 
            travel for whatever reason you will get 100% of your money back or rebook onto another service for free. This will also ensure that none of the seats 
            on our services go to waste enabling more people to get home at short notice.</p>
          </div>
          <div className={styles.topiccontainer}>
            <h3 className={styles.topicHeading}>Festivities Onboard</h3>
            <p className={styles.topictext}>This is a magical time of the year and we are aiming to bring the magic to our services over the festive period. Look out
            for our busses which will be decorated for the holidays. Travelling with little ones? they will get their own festive goody bag full of things to keep them
            occupied throughout the journey. We are also providing all of our passenger travelling in the week before christmas a complimentry 
            festive snack box to nibble on throughout the journey. We also have Vegan snackboxes available Just ask your driver!</p>
          </div>
          <div className={styles.topiccontainer}>
            <h3 className={styles.topicHeading}>Christmas Travel Inspiration</h3>
            <p className={styles.topictext}>We are increasing the number of daily seats on our services in both directions from the 14th December 
            from two to three in each direction. From the 20th to the 23rd this will increase to four daily services. 
            In order to offer these extra departures some services will be operated by our partner operators and some 
            facilities may not be available</p>
          </div>
        </div>
      </div>
    </>
  )

}

export default FestiveTravel