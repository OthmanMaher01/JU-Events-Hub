import axiosPrivate from "./useAxiosPrivate";

async function DeleteFile(fileId:number){
    try{
        const response =await axiosPrivate.post("/file/"+fileId+"/delete")
        return response
    }catch(error){

    }
}
export default DeleteFile