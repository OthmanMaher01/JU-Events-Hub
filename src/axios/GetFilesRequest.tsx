import axiosPrivate from "./useAxiosPrivate";

async function  GetFilesRequest(){
   const response= await axiosPrivate.get("/file/")
   return response
}
export default GetFilesRequest