import React from "react";
import { Link } from "react-router-dom";

function DisplayServices() {
  
  const [services, setServices] = React.useState(undefined)
  
  

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/services')
      const json = await res.json()
      setServices(json)
      console.log(services)
    }
    getData()
  }, [])

  return services ? 
    services.map((service, index) => {
      return <div key={index}>
        <h2>{service.serviceNumber}</h2>
        <h3>{service.operator}</h3>
        <h3>{service.DepartureDate}</h3>
        <h4>{service.Origin}</h4>
        <h4>{service.Destination}</h4>
        <h5>{service.BusType}</h5>
        <Link to={`/bookingform/${service._id}`}> <button>Buy Tickets</button></Link> 

      </div> 
    }) : <p>waiting on data</p>
}
  

export default DisplayServices