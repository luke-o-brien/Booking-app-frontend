import React from "react"
import styles from "../../styles/Subpagecomponents/FullInfoModal.module.scss"
import businteriorimg1 from "../../images/lux-express-salon-1024x660.jpeg"
import businteriorimg2 from "../../images/D9egR_gW4AETS-T.jpeg"

function FullinfoModal(props) {

  const [stops, setstops] = React.useState(false)

  const service = props.serviceInfo
  console.log(props.serviceInfo)

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  const displayDate = new Date(service.date).toLocaleString('en-GB', options)

  return ( <div className={styles.modal}>
    <div className={styles.detailsModel}>
      
      <div className={styles.modaltopbar}>
        <h2 className={styles.modaltitle}>Service Details</h2>
        <a className={styles.closebutton} value={false} onClick={() => props.updateState()}>close</a>
      </div>

      <div className={styles.modalmaincontent}>
        <div className={styles.details}>
          <div className={styles.topdetails}>
            <h4 className={styles.date}>{displayDate}</h4>
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
              <p className={styles.duration}>{Math.floor(service.duration / 60)} Hours</p>

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
          <div className={styles.imagesContainer}>
            <img className={styles.Busimages} src={businteriorimg1} alt="bus interior showing back of seats"/>
            <img className={styles.Busimages} src={businteriorimg2} alt="bus interior showing side view of seat"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FullinfoModal