import axios from "./Axios";

async function RefreshRequest(){
    try{
        const response =await axios.post("/auth/refresh",{
            refreshToken:localStorage.getItem("refreshToken")
        })
        return response.data.accessToken;
    }catch(error){

    }
}
export default RefreshRequest