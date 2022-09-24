import React from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",  
  })

  const [errors, setErrors] = React.useState("")

  function handleChange(e) {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setErrors("")

    try {
      const { data } = await axios.post(`api/login`, formData)
      localStorage.setItem('token', data.token)
      console.log(data.token)
      navigate('/dashboard') 
    } catch (err) {
      console.log(err)
      if (err.response.data.message === "Email or password is Incorrect try again!") {
        setErrors(err.response.data.message)
  
      } else if (err.response.data.message !== "Email or password is Incorrect try again!") {
        setErrors("oops error on our end please try again")
        
      } else {
        console.log(err)
      }
    }
  }


  return (
    <>
      <div>
        <h2>Login to your account</h2>
        <div>
          <form>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter password"
              name={'email'} 
              value={formData.email} 
              onChange={handleChange}>
            </input>
            <label>password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              name={'password'}
              value={formData.password}
              onChange={handleChange}>
            </input>
            {errors === "" ? null : <small>{errors}</small>} 
            <button onClick={handleSubmit} >Log in</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login