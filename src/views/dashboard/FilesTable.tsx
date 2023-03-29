import { Card, Box, TableHead, TableRow, TableCell, Checkbox, TableBody, Stack, Avatar, Typography, TablePagination, Table } from "@mui/material";
import SimpleBar from 'simplebar-react';
import { styled } from '@mui/material/styles';
export const Scrollbar = styled(SimpleBar)``;
import LocalFile from "./LocalFile"
import "./FilesTable.css"
import GetFileRequest from "../../axios/GetFile";
import { ChangeEvent, useEffect, useState } from "react";
import UploadFile from "../../axios/UploadFile";
import DeleteFile from "../../axios/DeleteFileRequest";
import GetFilesRequest from "../../axios/GetFilesRequest";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/AuthStore";

function FilesTable(){
  const [fileName ,setFileName]= useState('')
  const [file ,setFile]= useState<File>()
  const navigate = useNavigate();
  const setIsLoggedIn= useAuthStore((state)=>state.setIsLoggedIn)
  const [files,setFiles]=useState<LocalFile[]>([

  ])
  useEffect(() => {
      const response=GetFilesRequest();
      response.then(res=>setFiles(res.data)).catch(error=>{
          console.log("error")
          setIsLoggedIn(false)
          navigate("/home")
      })
   
      
    }, []);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleFileDelete=(fileId:number)=>{
    setFiles(files.filter((file)=>{file.id!=fileId}))
    DeleteFile(fileId)
  }
    return (
      <>
             
      <div className="container">
      <div className="inputs">
            <input className="file-name-input" type="text" placeholder="FileName"
                    onChange={(event) => {
                      setFileName(event.target.value);
                      }}
                      />
            <input type="file" placeholder="Email"
                    onChange={handleFileChange}
                    />
            <div className="upload-button" onClick={()=>UploadFile(fileName,file)}>
              <p>Upload</p>
            </div>
          </div>
       <table className="files-table">
    

          <div>

          <tr className="table-head">
            <th className="head-item file-name">File Name</th>
            <th className="head-item created-at">Created At</th>
            <th className="head-item updated-at">Updated At</th>
            <th className="head-item download"></th>
            <th className="head-item delete"></th>
          </tr>
          {files.map((file)=>{
            return (
              <tr className="table-row">
              <th className="table-item file-name" >{file.fileName}</th>
              <th className="table-item created-at">{file.createdAt.slice(0,10)}</th>
              <th className="table-item updated-at">{file.updatedAt.slice(0,10)}</th>
              <th className="table-item download" onClick={()=>GetFileRequest(file.id,file.fileName+"."+file.url.split(".")[1])}>Download</th>
              <th className="table-item delete" onClick={()=>handleFileDelete(file.id)}>Delete</th>
            </tr>
            )
          })
        }
        </div>
         
       </table>  
      </div>
      </>
    )
    
}
export default FilesTable