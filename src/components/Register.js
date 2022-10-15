import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import styles from '../styles/Register.module.scss'

function Register() {
  
  const navigate = useNavigate()
  
  const [formData, setFormData] = React.useState({
    name: "",
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

    try {
      const { data } = await axios.post('/api/register', formData)
      navigate('/login')
      console.log(data)

    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <>
      <div className={styles.page}>
        <div className={styles.leftSide}>
        </div>
        <div className={styles.rightSide}>
          <h2>Register for an account</h2>
          <form className={styles.loginForm} >
            <label>Name</label>
            <input
              type="text"
              name={'name'} 
              value={formData.name} 
              onChange={handleChange}
            ></input>
            <label>Email Address</label>
            <input 
              type="text"
              name={'email'}
              value={formData.email} 
              onChange={handleChange}>
            </input>
            <label>Password</label>
            <input 
              type="text"
              name={'password'}
              value={formData.password} 
              onChange={handleChange}>
            </input>
            <label>Password confirmation</label>
            <input 
              type="text"
              name={'passwordConfirmation'}
              value={formData.passwordConfirmation} 
              onChange={handleChange}>
            </input>
            <button onClick={handleSubmit}>Register</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register