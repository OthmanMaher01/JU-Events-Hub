import "./Header.css"
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/folder.png"
import useAuthStore from "../../stores/AuthStore";
import Dashboard from "../dashboard/Dashboard";
function Header(){
    const navigate = useNavigate();
    const isLoggedIn = useAuthStore((state)=>state.isLoggedIn)
    function loginPage() {
      navigate("/login");
    }
    function registerPage() {
        navigate("/register");
    }
    function homePage() {
        navigate("/home");
    }
    function dashboardPage() {
      navigate("/dashboard");
  }
    const setIsLoggedIn= useAuthStore((state)=>state.setIsLoggedIn)
    return(
        <div className="header">
            <img src={Logo} className="logo" onClick={homePage}/>
            <ul className="pages">
            { !isLoggedIn &&
               <li className="page" onClick={loginPage}>
               <p>
               LOGIN
               </p>
                </li> 
            }
            { !isLoggedIn &&
              <li className="page" onClick={registerPage}>
              <p>
              REGISTER
              </p>
                </li>     
            }
             { isLoggedIn &&
              <li className="page" onClick={dashboardPage}>
              <p>
              DASHBOARD
              </p>
                </li>     
            }
            { isLoggedIn &&
              <li className="page" onClick={()=>{
                setIsLoggedIn(false)
                localStorage.setItem("accessToken","")
                localStorage.setItem("refreshToken","")
                homePage()
                }
                }>
              <p>
              LOGOUT
              </p>
                </li>     
            }    
            </ul>
        </div>
    )
}
export default Header