import axios from "./Axios";

async function RegisterRequest(userName:string,email:string,password:string){
    try{
        const response =await axios.post("/auth/register",{
            password:password,
            email:email,
            userName:userName
        })
    }catch(error){

    }
}
export default RegisterRequest