import axios from "./Axios";
import FileDownload from 'js-file-download';
import axiosPrivate from "./useAxiosPrivate";

async function  GetFileRequest(fileId:number,fileName:string){
  axiosPrivate({
        url: '/file/'+fileId,
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
      });
}
export default GetFileRequest