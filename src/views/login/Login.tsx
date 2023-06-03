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
    <div className="page">
        <div className="form-box">
            <div className='form'>
            {errorMessage!=''&&<div className="error">
                {errorMessage}
            </div>}
            <input type="text" placeholder="Email"
                onChange={(event) => {
                setEmail(event.target.value);
                }}
                />
            <input type="password" placeholder="Password"
                onChange={(event) => {
                setPassword(event.target.value);
                }}
                />
            <div>
            </div>
                <button type="submit" value="SIGN IN" onClick={async ()=>{
                    try{
                        const response=await LoginRequest(email,password)
                        console.log(response)
                        setIsLoggedIn(true)
                        
                        navigate("/")
                    }catch(error:any){
                        setErrorMessage(error.response.data.message)
                    }
                   
                    }
                }>LOGIN</button>
            </div>
        </div>
      </div>
  )
}

export default Login
