import React from "react"
import styles from "../styles/BookingForm.module.scss"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { getLoggedInUserId } from "../lib/auth";
import Navbar from "./Navbar.js"
import LoginCheckout from "./LoginCheckout.js"

function BookingForm() {

  const { serviceId } = useParams()
  const navigate = useNavigate()
  const loggedInUser = getLoggedInUserId()
  
  const [selectedService, setSelectedService] = React.useState(undefined)
  const [termsAgree, setTermsAgree] = React.useState(false)
  const [showForm, setShowForm] = React.useState(false)
  const [checkerror, setcheckerror] = React.useState(false)
  // const [nationality, setNationality] = React.useState(undefined)

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

  function handlecheck() {
    if (checkerror) {
      setTermsAgree(!termsAgree)
      setcheckerror(false)
    } else {
      setTermsAgree(!termsAgree)
    }
  }
  async function bookservice(event) {
    event.preventDefault();
    if (termsAgree === true) {
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
        try {
          const { data } = await axios.put(`/api/services/${serviceId}`, { SeatNumber: remainingSeats })
          console.log(data)
          navigate("/BookingConfirmed", { state: {
            bookingId: data._id,
            serviceId: serviceId,
            email: formData.email,
            firstname: formData.firstName,
          } })
        } catch (err) {
          console.log(err.response.data)
        }
      }

    // window.Email.send({
    //   Host: "smtp.elasticemail.com",
    //   Username: "",
    //   Password: "",
    //   To: '',
    //   From: "",
    //   Subject: "Booking Confirmation",
    //   Body: ` <h1 style="color:red;">Booking Confirmed</h1>
    //   <p>You're off to ${selectedService.Destination}</p>
    //   <h2>Journey details</h2>`,
    // }).then(
    //   message => alert(message)
    // );
    } else {
      console.log("not checked")
      setcheckerror(true)
    }
  }
  

  return ( selectedService ?
    <div>
      <Navbar />
      
      {/*  S E R V I C E   I N F O R M A T I O N */}

      <div className={styles.pagecontent}>
        <div className={styles.servicebanner}>
          <div className={styles.servicedetailscontainer}>
            <h3 className={styles.serviceinfo}>Service Information</h3>
            <div className={styles.serviceContainer}>
              <div className={styles.operatorService}>
                <h4><b>{selectedService.operator}</b></h4>
                <h4>{selectedService.serviceNumber}</h4>
                <h4>{selectedService.DepartureDate}</h4>
                <h5 className={styles.overnighticon}>{selectedService.BusType} <span style={{ color: "#ffff80" }}><i className="fa-solid fa-moon yellow"></i></span></h5>
              </div>
              <div className={styles.servicedetails}>
                <div className={styles.OriginDest}>
                  <h4>{selectedService.Origin} to {selectedService.Destination} </h4>
                </div>
                <div className={styles.time}>
                
              
                </div>
                <div className={styles.timings}>
                  <div className={styles.timediv}>
                    <h4>Depart</h4>
                    <h4><b>{selectedService.DepartureTime}</b></h4>
                  </div>
                  <div className={styles.timediv}>
                    <h4>{` ------ 8 hours ------ `}</h4>
                    <small> + 1 day</small> 
                  </div>
                  <div className={styles.timediv}>
                    <h4>Arrive</h4>
                    <h4><b>{selectedService.ArrivalTime}</b></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>  
          <div className={styles.furtherinfo}>
            <h5 className={styles.allinfo}>Full Journey Details</h5>
            <h5 className={styles.amendsearch}>Amend Search</h5>
          </div>
        </div>
      </div>
      
      {/*  L O G   I N   /   S I G N   U P   /   G U E S T  */}
      
      { loggedInUser || showForm === true ? null : <div className={styles.logincontainer}>
        < LoginCheckout />
        <div className={styles.verticalRule}></div>
        <div className={styles.guestside}>
          <div className={styles.guestdiv}>
            <p className={styles.or}>or</p>
          </div>
          <div className={styles.guestdiv}>
            <button className={styles.guestbutton} onClick={() => setShowForm(true) }>Continue as guest</button>
          </div>
        </div>
      </div> }

      {/* { B O O K I N G   F O R M } */}

      { loggedInUser || showForm ? <div className={styles.bookingForm}>
        <h2>Purchase Tickets</h2>
        <div className={styles.formmain}>
          <form>
            <label>First Name</label>
            <input
              type="text"
              name={'firstName'} 
              value={formData.firstName} 
              onChange={handleChange}
              className={styles.textinput}>
            </input>
            <label>Last Name</label>
            <input
              type="text"
              name={'lastName'} 
              value={formData.lastName} 
              onChange={handleChange}
              className={styles.textinput}>
            </input>
            <label>Email</label>
            <input  
              type="text"
              name={'email'} 
              value={formData.email} 
              onChange={handleChange}
              className={styles.textinput}>
            </input>
            <label>Phone number</label>
            <input
              type="text"
              name={'phoneNumber'} 
              value={formData.phoneNumber} 
              onChange={handleChange}
              className={styles.textinput}></input>
            <label>Nationality </label>
            <select
              name={'nationality'} 
              value={formData.nationality} 
              onChange={handleChange}>
              <option>Please select your nationality</option>
              <option>United Kingdom</option>
              <option>Ireland</option>
              <option>European Union</option>
              <option>Non European Union</option>
            </select>
            {formData.nationality === "United Kingdom" ? <><p className={styles.immigrationblurb}>UK passport holders</p></> : 
              formData.nationality === "Ireland" ? <p className={styles.immigrationblurb}>Irish Citizens are free to travel to the UK and EU using a valid passport or passport card</p> : 
                formData.nationality === "European Union" ? <p className={styles.immigrationblurb}>EU citizens can travel to EU without restrictions</p> : 
                  formData.nationality === "Non European Union" ? <p className={styles.immigrationblurb}>Please check the entry requirements for entry into your destination country</p> :
                    null
            }
            <div className={styles.TC}>
              <label>I agree to the <a>terms and conditions</a></label>
              <input type="checkbox" className={styles.checkbox} onChange={handlecheck}></input>
              { checkerror ? <small className={styles.errors}><b>You must agree to the terms and conditions</b></small> : null}
            </div>
            <button onClick={bookservice}>Book Now</button>
          </form>
        </div>
      </div> : null}
    </div> : <p>waiting for data</p>
    
  )
}

export default BookingForm