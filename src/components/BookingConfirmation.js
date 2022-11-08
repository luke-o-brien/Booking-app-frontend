import React from "react"
import { useLocation } from "react-router-dom"
import styles from "../styles/BookingConfirmation.module.scss"
import Navbar from "./Navbar.js"


function BookingConfirmation() {

  const { state } = useLocation()
  console.log(state)
  const details = state

  const [selectedService, setSelectedService] = React.useState(undefined)

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/services/${details.serviceId}`)
      const json = await res.json()
      setSelectedService(json)
      console.log(selectedService)
    }
    getData()
  }, [details.serviceId])

  return ( selectedService ?
    <> 
      < Navbar />
      <div>
        <div>
          
        </div>
        <div className={styles.confirmationContainer}>
          <span style={{ color: "#00453e" }}>
            <i className="fa-solid fa-check fa-3x"></i>
          </span>
          <h2 className={styles.bookingConfirmed}>Booking Confirmed</h2>
          { selectedService ? <h2 className={styles.youreoff}>{details.firstname} you&apos;re going to {selectedService.Destination}!</h2> : null }
          <h3 className={styles.emailmessage}>A confirmation email has been sent to <b>{details.email}</b></h3>
          <h3 className={styles.bookingId}>Booking ID</h3>
          <p  className={styles.id}><b>{details.bookingId}</b></p>
        </div>
        <div>
          <h2>Journey Summary</h2>
          <div className={styles.servicecontainer}>
            <div className={styles.servicetop}>
              <div className={styles.servicetopdetails}>
                <h3 className={styles.time}>{selectedService.DepartureTime} - {selectedService.ArrivalTime}</h3>
              </div>
              <div className={styles.servicetoppricing}>
                <h3 className={styles.price}>€12.50</h3>
              </div>
            </div>
            <div className={styles.servicemaincontainer}>
              <h4>Journey Duration: {selectedService.duration} hours</h4>
              <h2>{selectedService.operator} {selectedService.serviceNumber}</h2>
            </div>
            <div className={styles.facilities}>
              { selectedService.facilities.wc ? <i className="fa-solid fa-restroom fa-lg"></i> : null}
              { selectedService.facilities.aircondition ? <i className="fa-regular fa-snowflake fa-lg"></i> : null}
              { selectedService.facilities.poweroutlet ? <i className="fa-solid fa-plug-circle-bolt fa-lg"></i> : null}
              { selectedService.facilities.accesible ?  <i className="fa-solid fa-wheelchair fa-lg"></i> : null}
              { selectedService.facilities.wifi ? <i className="fa-solid fa-wifi fa-lg"></i> : null}
          
            </div>
            <div className={styles.servicefurtherinfo}>
              <a>full details</a>
            </div>
          </div> 
        </div>
        
      </div>
    </> : null
  )
}

export default BookingConfirmation