import React from "react";
import DisplayServices from "./DisplayServices.js";
import styles from "../styles/ServiceSearch.module.scss"

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
      <div className={styles.titlecontainer}>
        <h2 className={styles.title}>Select Departure</h2>
        <h3 className={styles.route}>London - Den Haag</h3>
        <h3>Thursday 4th November</h3>
      </div>
      <DisplayServices />
    </>
  )
}

export default ServiceSearch