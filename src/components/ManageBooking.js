import React from "react"

function ManageBooking() {

  const [confirmCancel, setConfirmCancel] = React.useState(false)

  return (
    <>
      <h2>Manage Booking</h2>
      <button>Modify Booking</button>
      <button onClick={setConfirmCancel(!confirmCancel)}>Cancel Booking</button> 
      { confirmCancel ? <div>
        <h2>Are you sure you want to cancel this booking?</h2>
        <h3>this action cannot be undone</h3>
        <button>Cancel Booking</button>
        <button onClick={setConfirmCancel(!confirmCancel)}>Back</button>
      </div> : null}
    </>
  )
}

export default ManageBooking