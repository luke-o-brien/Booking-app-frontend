import React from "react";
import DisplayServices from "./DisplayServices.js";
// import styles from "../styles/ServiceSearch.module.scss"

function ServiceSearch() {


  return (
    <>
      <form>
        <label>Origin</label>
        <select>
          <option>London</option>
          <option>Den Haag</option>
        </select>
        <label>Destination</label>
        <select>
          <option>London</option>
          <option>Den Haag</option>
        </select>
        <label>Date</label>
        <input type="time">
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