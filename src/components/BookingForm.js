// React Functions Import 
import React from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

// Custom Functions and components Import
import { getLoggedInUserId } from "../lib/auth";
import axios from 'axios'
import Navbar from "./Navbar.js"
import LoginCheckout from "./LoginCheckout.js"
import FullInfoModal from "../components/Subpagecomponents/FullInfoModal.js";


// Styles and Images Import 
import styles from "../styles/BookingForm.module.scss"
import TermsandConditions from "./Subpagecomponents/TermsandConditions";
//mport businteriorimg1 from "../images/lux-express-salon-1024x660.jpeg"
//import businteriorimg2 from "../images/D9egR_gW4AETS-T.jpeg"



function BookingForm() {

  // state and function initialisation
  const { serviceId } = useParams()
  const navigate = useNavigate()
  const loggedInUser = getLoggedInUserId()
  const userId = loggedInUser
  console.log("user id: " + userId)
  
  // React States 
  const [service, setservice] = React.useState(undefined)
  const [termsAgree, setTermsAgree] = React.useState(false)
  const [showForm, setShowForm] = React.useState(false)
  const [checkerror, setcheckerror] = React.useState(false)
  //? const [nationality, setNationality] = React.useState(undefined)
  const [fullinfo, setFullInfo] = React.useState(false)
  const [terms, setterms] = React.useState(false)
  // const [booking, setBooking] = React.useState(undefined)


  // Get service data and save to state
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/services/${serviceId}`)
      const json = await res.json()
      setservice(json)
    }
    getData()
  }, [serviceId])


  // Formdata and handlechange functions
  const [formData, setFormData] = React.useState({
    serviceId: serviceId,
    userId: userId,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",  
    nationality: "",
  })


  function handleChange(e) {
    const { name, value } = e.target
    // console.log(formData)

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const updateState = () => {
    setFullInfo(false)
  }

  const updatetc = () => {
    setterms(false)
  }

  //Book Service Function
  
  async function bookservice(event) {
    event.preventDefault();
    console.log(formData)
    //!Post form to API
    if (termsAgree === true) {
      try {
        const { data } = await axios.post(`/api/services/${serviceId}/bookings`, formData)
        console.log(data)
        //setBooking(data)
        //! Deduct seats from booking object on backend
        const availableSeats = service.SeatNumber
        if (availableSeats === 0) {
        // console.log("sold out")
        } else {
          const remainingSeats = availableSeats - 1
          // console.log(remainingSeats)
          // console.log("minus one seat")
          try {
            const { data } = await axios.put(`/api/services/${serviceId}`, { SeatNumber: remainingSeats })
            console.log(data)
            try {
              const { data } = await axios.post(`/api/users/${loggedInUser}/bookings`, formData)
              console.log(data)
              navigate("/BookingConfirmed", { state: {
                bookingId: data._id,
                serviceId: serviceId,
                email: formData.email,
                firstname: formData.firstName,
              } })
    
            } catch (err) {
              console.log(err)
            }
          } catch (err) {
            console.log(err)
          }
        }

      } catch (err) {
        console.log(err.response.data)
      }
     
      
      //! Send Email to Customer with confirmation of key details
      //     window.Email.send({
      //       Host: "smtp.elasticemail.com",
      //       Username: "lukeobrien02@gmail.com",
      //       Password: "4FBBD0424B08AA058DA041736426649433B6",
      //       To: `${formData.email}`,
      //       From: "",
      //       Subject: "Booking Confirmation",
      //       Body: ` <h1 style="color:red;">Booking Confirmed</h1>
      //     <p>You're off to ${service.Destination}</p>
      //     <h2>Journey details</h2>`,
      //     }).then(
      //       message => alert(message)
      //     );
    } else {
      console.log("not checked")
      setcheckerror(true)
    }
  }
  

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  //const displayDate = new Date(service.DepartureDate).toLocaleString('en-GB', options)

  //! T&Cs checked ?
  function handlecheck() {
    if (checkerror) {
      setTermsAgree(!termsAgree)
      setcheckerror(false)
    } else {
      setTermsAgree(!termsAgree)
    }
  }

  return ( service ?
    <div>
      <Navbar />

      {/* S E R V I C E   I N F O R M A T I O N */}

      <div className={styles.pagecontent}>
        <div className={styles.servicebanner}>
          <div className={styles.servicedetailscontainer}>
            <h3 className={styles.serviceinfo}>Service Information</h3>
            <div className={styles.serviceContainer}>
              <div className={styles.operatorService}>
                <h4><b>{service.operator}</b></h4>
                <h4>{service.serviceNumber}</h4>
                <h4>{new Date(service.DepartureDate).toLocaleString('en-GB', options)}</h4>
                { service.BusType === "overnight" ? <h5 className={styles.overnighticon}>{service.BusType} <span style={{ color: "#ffff80" }}><i className="fa-solid fa-moon yellow"></i></span></h5> : null}
              </div>
              <div className={styles.servicedetails}>
                <div className={styles.OriginDest}>
                  <h4>{service.Origin} to {service.Destination} </h4>
                </div>
                <div className={styles.time}>
              
                </div>
                <div className={styles.timings}>
                  <div className={styles.timediv}>
                    <h4>Depart</h4>
                    <h4><b>{service.DepartureTime.slice(0,5)}</b></h4>
                  </div>
                  <div className={styles.timediv}>
                    <h4>{service.duration}</h4>
                    {(service.DepartureDate === service.ArrivalDate) ? null : <small> + 1 day</small>}
                  </div>
                  <div className={styles.timediv}>
                    <h4>Arrive</h4>
                    <h4><b>{service.ArrivalTime.slice(0,5)}</b></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>  
          <div className={styles.furtherinfo}>
            <h5 className={styles.allinfo} onClick={() => setFullInfo(true)}>Full Journey Details</h5>
            <Link to="/planjourney"className={styles.amendsearch}>Amend Search</Link>
          </div>
        </div>
      </div>

      {/*  F U L L   I N F O R M A T I O N    M O D E L  */}

      { fullinfo ? 
        <FullInfoModal
          updateState={updateState}
          serviceInfo={service}
        /> : null}
      
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
            {/* T E R M S    A N D    C O N D I T I O N S */}
            <div className={styles.TC}>
              <label>I agree to the <a onClick={() => setterms(true)}>terms and conditions</a></label>
              <input type="checkbox" className={styles.checkbox} onChange={handlecheck}></input>
              { checkerror ? <small className={styles.errors}><b>You must agree to the terms and conditions</b></small> : null}
            </div>
            <button onClick={bookservice}>Book Now</button>
          </form>
        </div>
        { terms ? <TermsandConditions updatetc={updatetc}/> : null}
      </div> : null}
    </div> : <p>waiting for data</p>
    
  )
}

export default BookingForm