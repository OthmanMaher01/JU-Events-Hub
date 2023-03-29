import './Register.css'
import Curve from ".././general/curve/Curve"
import { useState } from 'react'
import RegisterRequest from '../../axios/RegisterRequest'
import { useNavigate } from 'react-router-dom'
function Register() {
    const [email ,setEmail]= useState('')
    const [password ,setPassword]= useState('')
    const [firstName ,setFirstName]= useState('')
    const [lastName ,setLastName]= useState('')
    const navigate = useNavigate();
    const [errorMessage ,setErrorMessage]= useState('')

  return (
   
  <div className="register-page">
    <div className="signup-box">
        <div className="atypon-logo">
        </div>
      <div className="title">
          CREATE ACCOUNT
      </div>
      {errorMessage!=''&&<div className="error">
                {errorMessage}
            </div>}
      <div className="row">
          <div className="col">
              <div className="textboxtop">
                  <input type="text" placeholder="Firstname"
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}/>
              </div>
          </div>
          <div className="col">
              <div className="textboxtop">
                  <input type="text" placeholder="Lastname" onChange={(event) => {
                    setLastName(event.target.value);
                  }} />
              </div>
          </div>
      </div>
      <div className="textbox">
          <input type="text" placeholder="Email"  onChange={(event) => {
                    setEmail(event.target.value);
                  }}/>
      </div>
      <div className="textbox">
          <input type="password" placeholder="Password" onChange={(event) => {
                    setPassword(event.target.value);
                  }} />
      </div>
       <div>
          <span className='dha-span'>Have an account ? </span>
          <span className='login-span' onClick={()=>navigate("/login")}> Login here</span>
      </div>
      <div className="spinner-container" v-if="isLoading">
         <div className="spinner-border text-blue" role="status"/>
         </div>
      <div className="button"  >
          <input type="button" value="SIGN UP" onClick={async ()=>{
                    try{
                        const response= await RegisterRequest(firstName+" "+lastName,email,password)
                        navigate("/login")
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

export default Register
