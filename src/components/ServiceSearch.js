import React from "react";
import DisplayServices from "./DisplayServices.js";

function ServiceSearch() {
  return (
    <>
      <form>
        <label>Origin</label>
        <input>
        </input>
        <label>Destination</label>
        <input>
        </input>
        <label>Date</label>
        <input>
        </input>
        <label>Number of Passengers</label>
        <input>
        </input>
      </form>
      <DisplayServices />
    </>
  )
}

export default ServiceSearch