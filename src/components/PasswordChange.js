import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

function Register() {
  
  const navigate = useNavigate()
  
  const [formData, setFormData] = React.useState({
    oldPassword: "",
    password: "",
    passwordConfirmation: "",
    email: "",
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value, 
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const token = localStorage.getItem('token')

    try {
      const { data } = await axios.put('/api/users/63361da3040d7d02344eafc4', formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      navigate('/dashboard')
      console.log(data)

    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <>
      <div>
        <h2>change your password</h2>
        <form>
          <label>Old Password</label>
          <input
            type="text"
            name={'oldPassword'} 
            value={formData.oldPassword} 
            onChange={handleChange}
          ></input>
          <label>New Password</label>
          <input 
            type="text"
            name={'password'}
            value={formData.password} 
            onChange={handleChange}>
          </input>
          <label>confirm new password</label>
          <input 
            type="text"
            name={'passwordConfirmation'}
            value={formData.newpasswordConfirmation} 
            onChange={handleChange}>
          </input>
          <button onClick={handleSubmit}>Register</button>
        </form>
      </div>
    </>
  )
}

export default Register