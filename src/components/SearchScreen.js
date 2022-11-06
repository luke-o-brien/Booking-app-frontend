import React from "react";
import { useNavigate } from "react-router-dom";

function SearchScreen() {

  const navigate = useNavigate()

  const [formData, setFormData] = React.useState({
    origin: "",
    destination: "",
    date: "",
  })


  function handleChange(e) {
    const { name, value } = e.target
    console.log(formData)

    setFormData({
      ...formData,
      [name]: value,
    })
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
  return (
    <form>
      <label>Origin</label>
      <select
        name="origin"
        onChange={handleChange}
        value={formData.origin}>
        <option></option>
        <option>London</option>
        <option>Den Haag</option>
      </select>
      <label>Destination</label>
      <select
        name="destination"
        onChange={handleChange}
        value={formData.destination}>
        <option></option>
        <option>London</option>
        <option>Den Haag</option>
      </select>
      <label>Date</label>
      <input 
        type="date"
        name={'date'}
        onChange={handleChange}
        value={formData.date}>
      </input>
      <label>Number of Passengers</label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select>
      <button onClick={handlesubmit}>Search</button>
    </form>
    
  )
}

export default SearchScreen