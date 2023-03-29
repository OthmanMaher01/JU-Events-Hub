import useAuthStore from "../stores/AuthStore";
import axios from "./Axios";

async function LoginRequest(email:string,password:string){
    const response =await axios.post("/auth/login",{
        password:password,
        email:email
    })
    localStorage.setItem("refreshToken",response.data.refreshToken);
    localStorage.setItem("accessToken",response.data.accessToken);
    
    return response
}
export default LoginRequest