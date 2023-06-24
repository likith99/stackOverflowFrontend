import React, { useState } from 'react'
import { logIn,signUp } from '../../api'
import icon from "../../assets/icon.png"
import Aboutauth from './Aboutauth'
import {useDispatch,useSelector} from "react-redux"
import {login,signup} from "../../redux/authaction"
import  {useNavigate} from "react-router-dom"


function Auth() {
  const [isSignup, setisSignup] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const isSuccess = useSelector((state)=>state.auth.isSuccess)
  const loading = useSelector((state)=>state.auth.loading)

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleswitch = () => {
    setisSignup(!isSignup)
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    if (!password && !email){
      alert("Enter email and password")
    }
    if(isSignup){
      if(!name){
        alert("enter name to continue")
      }
    
      dispatch(signup({name,email,password}))
      .then(() => {
        navigate('/');
      })
    }
    else{
      dispatch(login({email,password}))
      .then(() => {
        navigate('/');
      })
    }
    
  }
  return (
    <section className='auth-section'>
      {isSignup && <Aboutauth />}
      <div class="auth-container-2">
        {!isSignup && <div id="logo-container"><img src={icon} alt='iconimg' className='login-logo'></img></div>}
        <form onSubmit={handlesubmit}>
          {isSignup && <label htmlFor='name'>
            <h4>Display name</h4>
            <input type="name" name="name" id="name" onChange={(e)=>{setName(e.target.value)}}></input>
          </label>}
          <label htmlFor='email'>
            <h4>Email</h4>
            <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
          </label>
          <label htmlFor='password'>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && <p className='p-blue-13'>Forgot password</p>}
            </div>
            <input type="text" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
            {isSignup && <p style={{ color: "#666767", fontSize: "13px" }}>Passwords must contain at least eight characters,<br /> including at least 1 letter and 1 number</p>}
          </label>
          {isSignup && <label htmlFor='check'>
            <input type="checkbox" name="name" id="name"></input>
            <p style={{ fontSize: "13px" }}>Opt-in to receive occasional product<br /> updates, user research invitations, company<br /> announcements, and digests</p>
          </label>}
          <button type='submit' className='auth-btn'>{isSignup ? "Signup" : "Login"}</button>
          <p>
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <button type="button" className='handle-switch-btn' onClick={handleswitch}>{isSignup ? " Login" : " Sign up"}</button>
          </p>
          {isSignup && <p style={{ color: "#666767", fontSize: "13px" }}>
            By clicking “Sign up”,you agree to our <span style={{ color: "#007ac6" }}>terms of<br />service</span>, <span style={{ color: "#007ac6" }}>privacy policy</span> and <span style={{ color: "#007ac6" }}>cookie policy</span>
          </p>
          }
        </form>
      </div>
    </section>
  )
}

export default Auth