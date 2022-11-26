import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/DisplayServices.module.scss"
import { useLocation } from "react-router-dom";
import businteriorimg1 from "../images/lux-express-salon-1024x660.jpeg"
import businteriorimg2 from "../images/D9egR_gW4AETS-T.jpeg"

function DisplayServices() {
  
  const [services, setServices] = React.useState(undefined)
  const [fullinfo, setFullInfo] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(null)
  
  const { state } = useLocation()
  console.log(state)
  const params = state

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  const displayDate = new Date(params.date).toLocaleString('en-GB', options)

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/servicesbysearch?origin=${params.origin}&destination=${params.destination}&date=${params.date}`)
      const json = await res.json()
      setServices(json)
      console.log(json)
    }
    getData()
  } , [])

  function handleClick(index) {
    console.log(index)
    setActiveIndex(index)
    setFullInfo(!fullinfo)
    
  }

  return ( <>
    <div className={styles.titlecontainer}>
      <h2 className={styles.title}>Select Departure</h2>
      <h3 className={styles.route}>{params.origin} - {params.destination}</h3>
      <h3>{displayDate}</h3>
    </div>
    {services ? <>
      {services.map((service, index) => {
        return <><div key={index} className={styles.servicecontainer}>
          <div className={styles.servicetop}>
            <div className={styles.servicetopdetails}>
              <h3 className={styles.time}>{service.DepartureTime} - {service.ArrivalTime}</h3>
            </div>
            <div className={styles.servicetoppricing}>
              <h3 className={styles.price}>€12.50</h3>
            </div>
          </div>
          <div className={styles.servicemaincontainer}>
            <h4>Journey Duration: {service.duration} hours</h4>
            <h2>{service.operator} {service.serviceNumber}</h2>
          </div>
          <div className={styles.facilities}>
            { service.facilities.wc ? <div className={styles.facilitiesIcon}><i className="fa-solid fa-restroom"></i></div> : null}
            { service.facilities.aircondition ? <div className={styles.facilitiesIcon}><i className="fa-regular fa-snowflake"></i></div> : null}
            { service.facilities.poweroutlet ? <div className={styles.facilitiesIcon}><i className="fa-solid fa-plug-circle-bolt"></i></div> : null}
            { service.facilities.accesible ?  <div className={styles.facilitiesIcon}><i className="fa-solid fa-wheelchair"></i></div> : null}
            { service.facilities.wifi ? <div className={styles.facilitiesIcon}><i className="fa-solid fa-wifi"></i></div> : null}
          
          </div>
          <div className={styles.servicefurtherinfo}>
            <a onClick={() => handleClick(index)}>full details</a>
            <Link to={`/bookingform/${service._id}`}> <button className={styles.bookbutton}>Buy Tickets</button></Link> 
          </div>
        </div>
        {(activeIndex === index) && fullinfo ? <div className={styles.modal}>
          <div className={styles.detailsModel}>
            <div className={styles.modaltopbar}>
              <h2 className={styles.modaltitle}>Service Details</h2>
              <a onClick={() => handleClick(index)}>close</a>
            </div>

            <div className={styles.modalmaincontent}>
              <div>
                <p>Service Number: {service.serviceNumber}</p>
                <p>operator: {service.operator}</p>
                <p>Date: {displayDate}</p>
                <p>From: {service.Origin}</p>
                <p>Departure Time: {service.DepartureTime}</p>
                <p>To: {service.Destination}</p>
                <p>ArrivalTime: {service.ArrivalTime}</p>
                <p>Type: {service.BusType}</p>
              </div>
              <div className={styles.facilitiesandimg}>
                <div className={styles.facilitiesModel}>
                  { service.facilities.wc ? <div className={styles.facilitiesIconModel}><i className="fa-solid fa-restroom"></i><p>WC</p></div> : null}
                  { service.facilities.aircondition ? <div className={styles.facilitiesIconModel}><i className="fa-regular fa-snowflake"></i><p>Air Conditioning</p></div> : null}
                  { service.facilities.poweroutlet ? <div className={styles.facilitiesIconModel}><i className="fa-solid fa-plug-circle-bolt"></i><p>Plug sockets(UK)</p></div> : null}
                  { service.facilities.accesible ?  <div className={styles.facilitiesIconModel}><i className="fa-solid fa-wheelchair"></i><p>Accesible</p></div> : null}
                  { service.facilities.wifi ? <div className={styles.facilitiesIconModel}><i className="fa-solid fa-wifi"></i><p>Free WIFI</p></div> : null}
                </div>
                <div>
                  <img className={styles.Busimages} src={businteriorimg1} />
                  <img className={styles.Busimages} src={businteriorimg2} />
                </div>
              </div>
            </div>
          </div>
        </div> : null}
        </>
      })} <small>all times are local</small></> : <p>waiting on data</p>}
  </> )
}
  

export default DisplayServices