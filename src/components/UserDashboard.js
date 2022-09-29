import React from "react";
import { Link } from "react-router-dom";

function UserDashboard() {
  return (
    <>
      <div>
        <h1>Hi Luke </h1>
        <h3>welcome to your dashboard</h3>
      </div>
      <div>
        <button>Your Upcoming bookings</button>
        <button>Past Bookings</button>
        <Link to='/passwordchange'>
          <button>Change password</button>
        </Link>
        <button>Edit Account Preferences </button>
      </div>
    </>
  )
}

export default UserDashboard