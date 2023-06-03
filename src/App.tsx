import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./views/login/Login"
import Register from "./views/register/Register"
import Home from "./views/home/Home"
import { useEffect } from "react"
import useAuthStore from "./stores/AuthStore"
function App() {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state)=>state.isLoggedIn)
  return (
    <div>
        <Routes>
            <Route path='' Component={Home}></Route>
            <Route path='/login' Component={Login}></Route>
            <Route path='/register' Component={Register}></Route>
            <Route path='/dashboard'></Route>
        </Routes>
    </div>
  )
}
export default App
