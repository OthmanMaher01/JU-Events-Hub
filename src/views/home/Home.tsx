import "./Home.css"
import Curve from ".././general/curve/Curve"
import { useNavigate } from "react-router-dom";
import useAuthStore from '../../stores/AuthStore';
import { AxiosError } from 'axios';
import { useEffect, useState } from "react";
import GetEventsRequest from "../../axios/GetFilesRequest";
export interface Event{
    id: string,
    name: string,
    date: string,
    description: string
}
function Home(){
    const isLoggedIn = useAuthStore((state)=>state.isLoggedIn)
    const navigate = useNavigate();
    useEffect(() => {
        const response=GetEventsRequest();
        response.then(res=>setEvents(res.data))
        .catch(error=>{
      
        })
    }, []);
    const setIsLoggedIn= useAuthStore((state)=>state.setIsLoggedIn)
    const [events,setEvents]=useState<Event[]>([

    ])
    const logout=()=>{
        setIsLoggedIn(false);
    }
    return(
        <>
        <a className="scrollToTop" href="#">
          <i className="fa fa-angle-up"></i>
        </a>
          
        <header id="mu-hero">
            <div className="container">
                <div className="mu-hero-area">
                    
                    <div className="mu-hero-top">
                        <div className="mu-logo-area">
                            <a className="mu-logo" href="index.html"><span>JU Events Hub</span></a>
                        </div>
                        <div className="mu-hero-top-info">
                            <ul>
                                {/* <li>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span>JUEventsHub@ju.jo</span>
                                </li> */}
                                <li>
                                    <div className="mu-telephone">
                                       {!isLoggedIn && <button className="login-button" onClick={()=>navigate("/login")}>Login</button>}
                                       {isLoggedIn && <button className="login-button" onClick={()=>logout()}>Logout</button>}
                                        
                                    </div>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                    { !isLoggedIn &&
                    <div className="mu-hero-featured-area">
                        <div className="mu-hero-featured-content">
                            <h2>Welcome To JU Events Hub </h2>
                            <h1>WE PROVIDE INFORMATION FOR EVENTS IN THE UNIVERSITY</h1>
                            <div className="mu-scrolldown-area">
                                <a href="#mu-about" className="mu-scrolldown" id="mu-scrolldown"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </header>
    
        
        <main>
        { !isLoggedIn &&
        <>
            <section id="mu-about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mu-about-area">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mu-about-left">
                                            <img className="" src="assets/images/ju-event.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mu-about-right">
                                            <h2>About JU Events Hub</h2>
                                            <p>JUEvents Hub is a website that combines and lists the events we have at university, it’s monitored by the university itself, the website categorizes the events based on the facilities and students can login using their JU university account and navigate through the website to find out events in their faculty or other faculties.
                                            </p>
    
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       
            <section id="mu-why-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mu-why-us-area">
                                <h2>Why Us?</h2>
                                <div className="mu-why-us-content">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mu-why-us-single">
                                                <div className="my-why-us-single-icon">
                                                    <i className="fa fa-universal-access" aria-hidden="true"></i>
                                                </div>
                                                <h3>Easy Access</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mu-why-us-single">
                                                <div className="my-why-us-single-icon">
                                                    <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                                                </div>
                                                <h3>The Best Service</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mu-why-us-single">
                                                <div className="my-why-us-single-icon">
                                                    <i className="fa fa-university" aria-hidden="true"></i>
                                                </div>
                                                <h3>Supported By The university</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="mu-video">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mu-video-area">
                                <h2>Watch Video about The University of Jordan</h2>
                                <p className="mu-title-content">This video is taken by students in the University of Jordan</p>
    
                                <div className="mu-video-content">		
                                    <iframe width="854" height="480" src="https://www.youtube.com/embed/J6H62tC0eXg" ></iframe>							
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>	
            </section>
            </>}
            { isLoggedIn &&
        <>
            <section id="mu-featured-tours">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mu-featured-tours-area">
                                <h2>Events in the University</h2>
                                <p className="mu-title-content">Pick an event to see the details and enroll in it</p>
    
                                <div className="mu-featured-tours-content">
                                    <div className="row">
                                    {events.map((event,idx)=>(
                                             <div className="col-md-4">
                                                <div className="mu-featured-tours-single">
                                                 <img src="assets/images/lec1.jpg" alt="img" />
                                                 <div className="mu-featured-tours-single-info">
                                                     <h3>{event.name}</h3>
                                                     <h4>{event.date}</h4>
                                                     <p>{event.description}</p>
                                                     {/* <a href="EventDetails.html" className="mu-book-now-btn">Book Now</a> */}
                                                    </div>
                                                </div>
                                            </div>
     
                                            )
                                        )
                                        }
                                       
    
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>}
            { !isLoggedIn &&
        <>
            <section id="mu-testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mu-testimonials-area">
                                <h2>What Our Users Says</h2>
    
                                <div className="mu-testimonials-block">
                                    <ul className="mu-testimonial-slide">
    
                                        <li>
                                            <i className="fa fa-quote-left mu-client-quote" aria-hidden="true"></i>
                                            <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."</p>
                                            <img className="mu-rt-img" src="assets/images/hamza1.png" alt="img" />
                                            <h5 className="mu-rt-name"> - Dr Ahmad</h5>
                                            <span className="mu-rt-title">Professor</span>
                                        </li>
    
                                    </ul>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>}
            { isLoggedIn &&
        <>
            <section id="mu-callto-action">
                <div className="container">
                    <div className="row col-md-12">
                        <div className="mu-callto-action-area">
                            <h2>Make your university life more rich with it's events</h2>
                            {isLoggedIn && <a className="mu-book-now-btn" onClick={()=> navigate("/register")}>Start Journey</a>}
                        </div>
                    </div>
                </div>
            </section>
            </>}
    
            <div id="mu-google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13531.85364351515!2d35.8695456!3d32.0161048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c9f765ba05b27%3A0x5a5ba049c504b635!2z2KfZhNis2KfZhdi52Kkg2KfZhNij2LHYr9mG2YrYqSAtIFVuaXZlcnNpdHkgb2YgSm9yZGFu!5e0!3m2!1sen!2sjo!4v1685014889796!5m2!1sen!2sjo" width="850" height="450" ></iframe>
            </div>
            </main>
        
           </>
    )
}
export default Home