import { useEffect, useState } from "react"
import "./Dashboard.css"
import GetFilesRequest from "../../axios/GetFilesRequest";
import FilesTable from "./FilesTable"
import LocalFile from "./LocalFile";
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import useAuthStore from '../../stores/AuthStore';
function Dashboard(){
   
    return (
        <div className="dashboard">
                <FilesTable/>
        </div>
    )
}
export default Dashboard