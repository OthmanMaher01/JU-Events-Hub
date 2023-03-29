import './Login.css'
import Curve from ".././general/curve/Curve"
import { useState } from 'react';
import LoginRequest from "../../axios/LoginRequest"
import { useNavigate } from "react-router-dom";
import useAuthStore from '../../stores/AuthStore';
function Login() {
    const navigate = useNavigate();
    const [email ,setEmail]= useState('')
    const [password ,setPassword]= useState('')
    const setIsLoggedIn= useAuthStore((state)=>state.setIsLoggedIn)
    const isLoggedIn = useAuthStore((state)=>state.isLoggedIn)
  return (
    <div className="login-page">
        <div className="login-box">
            <div className="title">
                LOG IN
            </div>
            <div className="textbox">
                <input type="text" placeholder="Email"
                 onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  />
            </div>
            <div className="textbox">
                <input type="password" placeholder="Password"
                 onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  />
            </div>
            <div>
            <span className='dha-span' >Don't have an account ? </span>
            <span  className='register-span' onClick={()=>navigate("/register")}> Register here</span>
            </div>
            <div className="spinner-container" v-if="isLoading">
                <div className="spinner-border text-blue" role="status"/>
            </div>
            <div className="button"  >
                <input type="submit" value="SIGN IN" onClick={async ()=>{
                    await LoginRequest(email,password)
                    setIsLoggedIn(true)
                    console.log(isLoggedIn)
                    navigate("/dashboard")}
                }/>
            </div>
            {/* <div className="error" v-if="!isValid">
                Please Enter A Valid Data
            </div> */}
        </div>
        <Curve></Curve>
      </div>
  )
}

export default Login
