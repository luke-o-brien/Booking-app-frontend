import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ServiceSearchBox.module.scss";

function SearchScreen() {

  const navigate = useNavigate()

  const [formData, setFormData] = React.useState({
    origin: "",
    destination: "",
    date: "",
  })

  const [expand, setExpand] = React.useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    console.log(formData)

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleExpand() {
    setExpand(true)
  }

  function handlesubmit(e) {
    e.preventDefault();
    console.log(formData)
    navigate("/planjourney", { state: {
      origin: formData.origin,
      destination: formData.destination,
      date: formData.date,
    } })
  }
  return ( <>
    <div className={styles.buytickets}>
      <h1 className={styles.title}>Where are you Going?</h1>
      <form className={styles.form}>
        <div className={styles.origindestcontainer}>
          <div className={styles.origindest}>
            <label>Origin</label>
            <select
              className={styles.selectfield}
              name="origin"
              onChange={handleChange}
              onClick={handleExpand}
              value={formData.origin}>
              <option></option>
              <option>London</option>
              <option>Den Haag</option>
            </select>
          </div>
          <div className={styles.origindest}>
            <label>Destination</label>
            <select
              className={styles.selectfield}
              name="destination"
              onChange={handleChange}
              onClick={handleExpand}
              value={formData.destination}>
              <option></option>
              <option>London</option>
              <option>Den Haag</option>
            </select>
          </div>
        </div>
        {<div className={expand ? `${styles.secondrow}` : `${styles.secondrowhidden}`}>
          <div className={styles.datepasscontainer}>
            <div className={styles.datepass}>
              <label>Date</label>
              <input 
                className={styles.selectfieldsecond}
                type="date"
                name={'date'}
                onChange={handleChange}
                value={formData.date}>
              </input>
            </div>
            <div className={styles.datepass}>
              <label>Number of Passengers</label>
              <select
                className={styles.selectfieldsecond}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
          </div>
          <div className={styles.submit}>
            <button className={styles.submitbutton} onClick={handlesubmit}>Search</button>
          </div>
        </div>}
        
      </form>
    </div>
  </>
  )
}

export default SearchScreen