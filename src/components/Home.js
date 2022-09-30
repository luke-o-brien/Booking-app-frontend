import React from "react"
import Navbar from "./Navbar.js"

function Home() {
  return ( <>
    <section>
      <Navbar />
      <div>
        <div>
          <h2>
            Booking app
          </h2>
          <button>Plan your Next Journey</button>
        </div>
      </div>
    </section>
  </>
  )
}

export default Home
