import React from "react"
import styles from "../styles/BookingForm.module.scss"
import { useParams } from "react-router-dom"


function BookingForm() {

  const { serviceId } = useParams()
  const [selectedService, setSelectedService] = React.useState(undefined)

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/services/${serviceId}`)
      const json = await res.json()
      setSelectedService(json)
    }
    getData()
  }, [serviceId])

  return ( selectedService ?
    <div>
      <div>
        <h2>Purchase tickets</h2>
        <h3>Service Information</h3>
      </div>
      <div className={styles.serviceContainer}>
        <div className={styles.operatorService}>
          <h4><b>{selectedService.operator}</b></h4>
          <h4>{selectedService.serviceNumber}</h4>
        </div>
        
        <h4>Departure {selectedService.DepartureDate}</h4>
        <h4>{selectedService.DepartureTime}</h4>
        <h4>Origin: {selectedService.Origin}</h4>
        <h4>{selectedService.ArrivalDate}</h4>
        <h4>{selectedService.ArrivalTime}</h4>
        <h4>Destination: {selectedService.Destination}</h4>
        <h4>{selectedService.BusType}</h4>
      </div>
      <div>
        
      </div>
    </div> : <p>waiting for data</p>
  )
}

export default BookingForm