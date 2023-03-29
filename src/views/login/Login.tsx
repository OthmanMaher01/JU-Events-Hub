import './Login.css'
import Curve from ".././general/curve/Curve"
import { useState } from 'react';
import LoginRequest from "../../axios/LoginRequest"
import { useNavigate } from "react-router-dom";
import useAuthStore from '../../stores/AuthStore';
import { AxiosError } from 'axios';
function Login() {
    const navigate = useNavigate();
    const [email ,setEmail]= useState('')
    const [errorMessage ,setErrorMessage]= useState('')
    const [password ,setPassword]= useState('')
    const setIsLoggedIn= useAuthStore((state)=>state.setIsLoggedIn)
    const isLoggedIn = useAuthStore((state)=>state.isLoggedIn)
  return (
    <div className="login-page">
        <div className="login-box">
            <div className="title">
                LOG IN
            </div>
            {errorMessage!=''&&<div className="error">
                {errorMessage}
            </div>}
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
                    try{
                        const response=await LoginRequest(email,password)
                        console.log(response)
                        setIsLoggedIn(true)
                        navigate("/dashboard")
                    }catch(error:any){
                        setErrorMessage(error.response.data.message)
                    }
                   
                    }
                }/>
            </div>
         
        </div>
        <Curve></Curve>
      </div>
  )
}

export default Login
