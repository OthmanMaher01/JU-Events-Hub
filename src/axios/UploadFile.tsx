import axiosPrivate from "./useAxiosPrivate";

async function UploadFile(fileName:string,file:File|undefined){
    try{
        const response =await axiosPrivate.post("/file/",{
            fileName:fileName,
            file:file
        },
        {
        headers: {
            "Content-Type": "multipart/form-data",
        },
          }
        )
    }catch(error){

    }
}
export default UploadFile