import React from "react"
import styles from "../styles/BookingForm.module.scss"
import { useParams } from "react-router-dom"
import axios from 'axios'


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

  const [formData, setFormData] = React.useState({
    serviceId: serviceId,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",  
    nationality: "",
  })


  function handleChange(e) {
    const { name, value } = e.target
    console.log(formData)

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  async function bookservice(event) {
    event.preventDefault();
    try {
      const { data } = await axios.post(`/api/services/${serviceId}/bookings`, formData)
      console.log(data)

    } catch (err) {
      console.log(err.response.data)
    }
    const availableSeats = selectedService.SeatNumber
    if (availableSeats === 1) {
      console.log("sold out") 
    } else {
      const remainingSeats = availableSeats - 1
      console.log(remainingSeats)
      console.log("minus one seat")
      console.log(formData)
      try {
        const { data } = await axios.put(`/api/services/${serviceId}`, { SeatNumber: remainingSeats })
        console.log(data)
      } catch (err) {
        console.log(err.response.data)
      }
    }
  }
  

  return ( selectedService ?
    <div>
      <div>
        <div>
          <h3>Service Information</h3>
        </div>
        <div className={styles.serviceContainer}>
          <div className={styles.operatorService}>
            <h4><b>{selectedService.operator}</b></h4>
            <h4>{selectedService.serviceNumber}</h4>
            <h4>{selectedService.DepartureDate}</h4>
          </div>
          <div className={styles.servicedetails}>
            <div className={styles.origindest}>
              <h4><b>{selectedService.DepartureTime}</b></h4>
              <h4>{selectedService.Origin}</h4>
            </div>
            <div className={styles.time}>
              <p>{` ------ 8 hours -----> `}</p>
            </div>
            <div className={styles.origindest}>
              <h4><b>{selectedService.ArrivalTime}</b></h4>
              <h4>{selectedService.Destination}</h4>
            </div>
          </div>
        
        
          <h5 className={styles.overnighticon}>{selectedService.BusType}</h5>
        </div>
        <div>
        
        </div>
      </div>
      <div>
        <h2>Purchase Tickets</h2>
        <div>
          <form>
            <label>First Name</label>
            <input
              type="text"
              name={'firstName'} 
              value={formData.firstName} 
              onChange={handleChange}>
            </input>
            <label>Last Name</label>
            <input
              type="text"
              name={'lastName'} 
              value={formData.lastName} 
              onChange={handleChange}>
            </input>
            <label>Email</label>
            <input  
              type="text"
              name={'email'} 
              value={formData.email} 
              onChange={handleChange}>
            </input>
            <label>Phone number</label>
            <input
              type="text"
              name={'phoneNumber'} 
              value={formData.phoneNumber} 
              onChange={handleChange}></input>
            <label>Nationality </label>
            <select
              name={'nationality'} 
              value={formData.nationality} 
              onChange={handleChange}>
              <option>United Kingdom</option>
              <option>Ireland</option>
              <option>European Union</option>
              <option>Non European Union</option>
              <option>British Overseas Territory</option>
            </select>
            <button onClick={bookservice}>Book Now</button>
          </form>
        </div>
      </div>
    </div> : <p>waiting for data</p>
    
  )
}

export default BookingForm