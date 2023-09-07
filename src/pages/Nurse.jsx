import React,{useState} from "react";
import Card from "../components/Card";
import {Box,Button,FormControlLabel,FormGroup,TextField  } from "@mui/material"
import {NavLink} from "react-router-dom"
import NurseForm from "../components/NurseForm";
import DoctorDetails from "../components/DoctorDetails";
import { DataGrid } from "@mui/x-data-grid";
import Login_NavBar from "../components/Login_NavBar";
import SelectPatient from "../components/SelectPatient";

export default function Nurse() {

  
  return (
    <div>

            <Login_NavBar/>
        <div className="flex flex-column ">
            <NurseForm/>
            {/* <Box sx={{fontWeight:"bold"}}>
                Patient In queue
                <SelectPatient/>
            </Box> */}
        </div>
            <DoctorDetails/>
    </div>
  );
}