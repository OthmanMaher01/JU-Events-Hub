
import axios from "axios"; 
export default axios.create({
  baseURL : 'http://127.0.0.1:8085/api/',
  headers:{
    "Content-Type":"application/json",
    timeout : 1000,
  },
  withCredentials:true
});
