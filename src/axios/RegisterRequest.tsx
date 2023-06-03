import axios from "./Axios";

async function RegisterEvent(eventName:string,eventDate:string,eventDescription:string){

    const response =await axios.post("/event",{
        name:eventName,
        date:eventDate,
        description:eventDescription
    })
    return response
  
}
export default RegisterEvent