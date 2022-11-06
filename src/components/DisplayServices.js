import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/DisplayServices.module.scss"
import { useLocation } from "react-router-dom";

function DisplayServices() {
  
  const [services, setServices] = React.useState(undefined)
  
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
      const res = await fetch(`/api/servicesbysearch?date=${params.date}`)
      const json = await res.json()
      setServices(json)
      console.log(json)
    }
    getData()
  }, [])

  return ( <>
    <div className={styles.titlecontainer}>
      <h2 className={styles.title}>Select Departure</h2>
      <h3 className={styles.route}>{params.origin} - {params.destination}</h3>
      <h3>{displayDate}</h3>
    </div>
    {services ? 
      services.map((service, index) => {
        return <div key={index} className={styles.servicecontainer}>
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
            { service.facilities.wc ? <i className="fa-solid fa-restroom fa-lg"></i> : null}
            { service.facilities.aircondition ? <i className="fa-regular fa-snowflake fa-lg"></i> : null}
            { service.facilities.poweroutlet ? <i className="fa-solid fa-plug-circle-bolt fa-lg"></i> : null}
            { service.facilities.accesible ?  <i className="fa-solid fa-wheelchair fa-lg"></i> : null}
            { service.facilities.wifi ? <i className="fa-solid fa-wifi fa-lg"></i> : null}
          
          </div>
          <div className={styles.servicefurtherinfo}>
            <a>full details</a>
            <Link to={`/bookingform/${service._id}`}> <button className={styles.bookbutton}>Buy Tickets</button></Link> 
          </div>
        </div> 
      }) : <p>waiting on data</p>}
  </> )
}
  

export default DisplayServices