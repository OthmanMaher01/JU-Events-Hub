import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./views/login/Login"
import Register from "./views/register/Register"
import Header from "./views/header/Header"
import Home from "./views/home/Home"
import Dashboard from "./views/dashboard/Dashboard"
import { useEffect } from "react"
import useAuthStore from "./stores/AuthStore"
function App() {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state)=>state.isLoggedIn)
  useEffect(() => {
    if(isLoggedIn){
      navigate("/dashboard")
    }else{
      navigate("/home")
    }
    }, []);
  return (
    <div>
        <Header></Header>
        <Routes>
            <Route path='/home' Component={Home}></Route>
            <Route path='/login' Component={Login}></Route>
            <Route path='/register' Component={Register}></Route>
            <Route path='/dashboard' Component={Dashboard}></Route>
            <Route path='/dashboard'></Route>
        </Routes>
    </div>
  )
}
export default App
