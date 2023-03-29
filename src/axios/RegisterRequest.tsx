import axios from "./Axios";

async function RegisterRequest(userName:string,email:string,password:string){

    const response =await axios.post("/auth/register",{
        password:password,
        email:email,
        userName:userName
    })
    return response
  
}
export default RegisterRequest