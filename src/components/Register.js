import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import styles from '../styles/Register.module.scss'
import { Link } from "react-router-dom";

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
        <div className={styles.rightSide}>
          <form className={styles.loginForm} >
            <h2 className={styles.signintitle}>Register</h2>
            <h2 className={styles.signinsubtitle}>Create an account for the most convienent experience</h2>
            <label>Name</label>
            <input
              type="text"
              name={'name'} 
              className={styles.registerinput}
              value={formData.name} 
              onChange={handleChange}
            ></input>
            <label>Email Address</label>
            <input 
              type="text"
              name={'email'}
              className={styles.registerinput}
              value={formData.email} 
              onChange={handleChange}>
            </input>
            <label>Password</label>
            <input 
              type="text"
              name={'password'}
              value={formData.password} 
              className={styles.registerinput}
              onChange={handleChange}>
            </input>
            <label>Password confirmation</label>
            <input 
              type="text"
              name={'passwordConfirmation'}
              className={styles.registerinput}
              value={formData.passwordConfirmation} 
              onChange={handleChange}>
            </input>
            <button onClick={handleSubmit}>Register</button>
            <Link to="/login">
              <button className={styles.registerButton}>Have an account? <b className={styles.registerLink}>Log in</b></button>
            </Link>
          </form>
          <div>
            <button onClick={() => navigate(-1)} className={styles.return}><i className="fa-solid fa-arrow-left-long"></i><p>return to page</p></button>
          </div>
        </div>
        <div className={styles.leftSide}>
        </div>
      </div>
    </>
  )
}

export default Register