import useAuthStore from "../stores/AuthStore";
import axios from "./Axios";

async function LoginRequest(email:string,password:string){
    const response =await axios.post("/auth/login",{
        password:password,
        email:email
    }
    )
 
    return response
}
export default LoginRequest