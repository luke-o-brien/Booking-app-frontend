import styles from '../styles/LoginCheckout.module.scss'
import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom"

function LoginCheckout() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",  
  })

  const [errors, setErrors] = React.useState("")

  function handleChange(e) {
    const { name, value } = e.target

    setLoginFormData({
      ...loginFormData,
      [name]: value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setErrors("")

    try {
      const { data } = await axios.post(`/api/login`, loginFormData)
      localStorage.setItem('token', data.token)
      localStorage.setItem('name', data.name)
      localStorage.setItem('_id', data._id)
      console.log(data.token)
      console.log(data)
      window.location.reload(false)
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
    <div className={styles.page}>
      <div className={styles.rightSide}>
        <form className={styles.loginForm}>
          <h2 className={styles.signintitle}>Log in</h2>
      
          <label>Email</label>
          <input
            type="text"
            name={'email'} 
            value={loginFormData.email} 
            onChange={handleChange}>
          </input>
          <label>password</label>
          <input
            type="password"
            name={'password'}
            value={loginFormData.password}
            onChange={handleChange}>
          </input>
          {errors === "" ? null : <p className={styles.errormsg}>{errors}</p>} 
          <button onClick={handleSubmit} >Log in</button>
          <Link to="/register">
            <button className={styles.registerButton}>Dont have an account? <b className={styles.registerLink}>Sign up</b></button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginCheckout