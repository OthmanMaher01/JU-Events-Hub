import useAuthStore from "../stores/AuthStore";
import axios from "./Axios";

async function LoginRequest(email:string,password:string){
    try{
        const response =await axios.post("/auth/login",{
            password:password,
            email:email
        })
        localStorage.setItem("refreshToken",response.data.refreshToken);
        localStorage.setItem("accessToken",response.data.accessToken);
    
    }catch(error){

    }
}
export default LoginRequest