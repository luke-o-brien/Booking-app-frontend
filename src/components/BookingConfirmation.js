import React from "react"
import { useLocation } from "react-router-dom"
import styles from "../styles/BookingConfirmation.module.scss"
import Navbar from "./Navbar.js"


function BookingConfirmation() {



  const { state } = useLocation()
  console.log(state)
  const details = state

  const [service, setService] = React.useState(undefined)
  const [serviceDetails, setServicedetails] = React.useState(false)
  const [stops, setstops] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/services/${details.serviceId}`)
      const json = await res.json()
      setService(json)
      console.log(service)
    }
    getData()
  }, [details.serviceId])

  return ( service ?
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
          { service ? <h2 className={styles.youreoff}>{details.firstname} you&apos;re going to {service.Destination}!</h2> : null }
          <h3 className={styles.emailmessage}>A confirmation email has been sent to <b>{details.email}</b></h3>
          <h3 className={styles.bookingId}>Booking ID</h3>
          <p  className={styles.id}><b>{details._id}</b></p>
        </div>
        <div>
          <div className={styles.modaltopbar}>
            <h2 className={styles.modaltitle} onClick={() => setServicedetails(!serviceDetails)}>View Service Details</h2>
          </div>
          { serviceDetails ? <div className={styles.modalmaincontent}>
            <div className={styles.details}>
              <div className={styles.topdetails}>
                <h4 className={styles.date}>{}</h4>
                <p className={styles.operator}>{service.Origin} to {service.Destination}</p>
                <p className={styles.serviceno}>{service.operator} - {service.serviceNumber}</p> 
              </div>
              <div className={styles.OriginDestContainer}>
                <div className={styles.OriginDest}>
                  <h5>Departure</h5>
                  <p>{service.OriginPoint}</p>
                  <p>{service.DepartureTime.slice(0,5)}</p>
                </div>
                <div className={styles.OriginDestduration}>
                  <p className={styles.duration}>{service.duration.toString().slice(0,1)} Hours</p>
                </div>
                <div className={styles.OriginDest}>
                  <h5>Arrival</h5>
                  <p>{service.DestinationPoint}</p>
                  <p>{service.ArrivalTime.slice(0,5)}</p>
                </div>
              </div>
              <div>
                <h3 className={styles.stoptitle} onClick={() => setstops(!stops)}>View all stops<i className="fa-solid fa-angle-down"></i></h3>
                <div className={styles.stopcontainer}>
                  { stops ? <>{service.stoppingPoints.map((stop, index) => {
                    return <div className={styles.stopdiv} key={index}>
                      <div className={styles.stoptimediv}>
                        <p className={styles.stoptime}>{stop.time.slice(0,5)}</p>
                      </div>
                      <div>
                        <p className={styles.stopcity}>{stop.city}</p>
                        <p className={styles.stopstop}>{stop.stop}</p>
                      </div>
                    </div>
                  })} </> : null }
                </div>
              </div>
              <div className={styles.facilitiesandimg}>
                <div className={styles.facilitiesModal}>
                  { service.facilities.wc ? <div className={styles.facilitiesIconModel}><div className={styles.icon}><i className="fa-solid fa-restroom"></i></div><p>Toilet</p></div> : null}
                  { service.facilities.aircondition ? <div className={styles.facilitiesIconModel}><div className={styles.icon}><i className="fa-regular fa-snowflake"></i></div><p>Air Conditioning</p></div> : null}
                  { service.facilities.poweroutlet ? <div className={styles.facilitiesIconModel}><div className={styles.icon}><i className="fa-solid fa-plug-circle-bolt"></i></div><p>Plug sockets(EU)</p></div> : null}
                  { service.facilities.accesible ?  <div className={styles.facilitiesIconModel}><div className={styles.icon}><i className="fa-solid fa-wheelchair"></i></div><p>Wheelchair Accesible</p></div> : null}
                  { service.facilities.wifi ? <div className={styles.facilitiesIconModel}><div className={styles.icon}><i className="fa-solid fa-wifi"></i></div><p>Free WIFI</p></div> : null}
                  { service.facilities.tv ? <div className={styles.facilitiesIconModel}><div className={styles.icon}><i className="fa-solid fa-tv"></i></div><p>Entertainment</p></div> : null}
                  { service.facilities.bike ? <div className={styles.facilitiesIconModel}><div className={styles.icon}><i className="fa-solid fa-bicycle"></i></div><p>Bike spaces</p></div> : null}
                  { service.facilities.water ? <div className={styles.facilitiesIconModel}><div className={styles.icon}><i className="fa-solid fa-glass-water"></i></div><p>Free Tap Water</p></div> : null}
                  { service.facilities.emmissions ? <div className={styles.facilitiesIconModel}><div className={styles.icon}><i className="fa-solid fa-leaf"></i></div><p>Low Emission Bus</p></div> : null}
                </div>
                <h3 className={styles.facilitiestitle}>Onboard Facilities</h3>
              </div>
            </div>
          </div> : null}
        </div>
      </div>
    </> : null
  )
}

export default BookingConfirmation