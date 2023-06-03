import axios from "./Axios";
async function  GetEventsRequest(){
   const response= await axios.get("/event")
   return response
}
export default GetEventsRequest