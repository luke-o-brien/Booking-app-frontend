import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import styles from '../styles/PasswordChange.module.scss'

function ChangePassword() {
  
  const navigate = useNavigate()
  
  const [authorized, setAuthorized] = React.useState(false)
  const [authData, setAuthData] = React.useState({
    password: "",
  }) 

  const [formData, setFormData] = React.useState({
    // oldPassword: "",
    password: "",
    passwordConfirmation: "",
    email: "",
  })

  function handleAuthChange(e) {
    const { name, value } = e.target
    setAuthData({
      ...authData,
      [name]: value, 
    })
  }

  async function handleAuthSubmit(e) {
    e.preventDefault()
    const token = localStorage.getItem('token')
    try {
      const { data } = await axios.post('/api/users/63376aa6400c76a2576364ad/authorize', authData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log(data)
      setAuthorized(true)
      
    } catch (err) {
      console.log(err.response.data)
    }
  }

  
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
    if (formData.password === formData.passwordConfirmation) {
      try {
        const { data } = await axios.put('/api/users/63376aa6400c76a2576364ad', formData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        navigate('/dashboard')
        console.log(data)

      } catch (err) {
        console.log(err.response.data)
      }
    } else {
      console.log("passwords do not match ")
    }
  }

  return (
    <>
      <div className={styles.center}>
        
        { authorized ?
          <form className={styles.ChangePasswordForm}>
            <h2>change your password</h2>
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
          : 
          <form className={styles.ChangePasswordForm}>
            <h2>change your password</h2>
            <label>Old Password</label>
            <input
              type="password"
              name={'password'} 
              value={authData.password} 
              onChange={handleAuthChange}
            ></input>
            <button onClick={handleAuthSubmit}>Proceed</button>
          </form>}
      </div>
    </>
  )
}

export default ChangePassword