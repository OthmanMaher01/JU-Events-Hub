import './Register.css'
import Curve from ".././general/curve/Curve"
import { useState } from 'react'
import RegisterEvent from '../../axios/RegisterRequest'
import { useNavigate } from 'react-router-dom'
function Register() {
    const navigate=useNavigate()
    const [eventName ,setEventName]= useState('')
    const [eventDate ,setEventDate]= useState('')
    const [eventDescription ,setEventDescription]= useState('')
    const register=()=>{
        RegisterEvent(eventName,eventDate,eventDescription)
    }
  return (
   
    <section id="mu-contact">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="mu-contact-area">
                    <h2>Register an event</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    <div className="mu-contact-content">
                        <div className="row">

                            <div className="col-md-12">
                                <div className="mu-contact-form-area">
                                    <div id="form-messages"></div>
                                    <form id="ajax-contact" method="post" className="mu-contact-form">

                                        <div className="form-group">                
                                            <input type="text" className="form-control" placeholder="Event Name" id="subject" name="subject" required
                                            onChange={(event) => {
                                                setEventName(event.target.value);
                                                }}
                                                 />
                                        </div>
                                        <div className="form-group">                
                                            <input type="text" className="form-control" placeholder="Event Date" id="subject" name="subject" required
                                             onChange={(event) => {
                                                setEventDate(event.target.value);
                                                }}/>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Event Description" id="message" name="message" required
                                             onChange={(event) => {
                                                setEventDescription(event.target.value);
                                                }}></textarea>
                                        </div>
                                        <button  className="mu-send-msg-btn register-button" onClick={()=> 
                                        {
                                            
                                            register()
                                            navigate("/")
                                        }
                                        }>Register</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Register
