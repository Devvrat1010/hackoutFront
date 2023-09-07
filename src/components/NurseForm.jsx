import React,{useEffect, useState} from "react";
import Card from "../components/Card";
import {Box,Button,FormControlLabel,FormGroup,TextField,IconButton } from "@mui/material"
import {NavLink} from "react-router-dom"
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';



export default function NurseForm(){
    const navigate = useNavigate();
    
    const getPatientdata =async () => {
        await fetch("https://backend-v8da.onrender.com/nursesData")
       .then((response) => response.json())
       .then((data) => console.log(data));
   }    
    let count=0
    const [nameError,setNameError] = useState("")
    const [phoneError,setPhoneError] = useState("")
    const [mailError,setMailError] = useState("")
    
    const [formValues,setFormValues]=useState({abha:"",symptoms:"",vitals:"",age:"",blood_pressure:"",height:"",weight:""})

    const [abha,setAbha] = useState()
    const abhaChange = (e) => {
        setAbha(e.target.value)
        setFormValues({...formValues,"abha":Number(e.target.value)})
    }

    const [symptoms,setSymptoms] = useState("")
    const symptomsChange = (e) => {
        setSymptoms(e.target.value)
        console.log()
        setFormValues({...formValues,"symptoms":e.target.value})
    }

    const [vital,setVitals] = useState("")
    const vitalsChange = (e) => {
        setVitals(e.target.value)
        console.log()
        setFormValues({...formValues,"vitals":e.target.value})
    }
    
    const [age,setAge] = useState()
    const ageChange = (e) => {
        setAge(e.target.value)
        console.log()
        setFormValues({...formValues,"age":e.target.value})
    }
    
    const [bloodPressure,setBloodPressure] = useState("")
    const bloodPressureChange = (e) => {
        setBloodPressure(e.target.value)
        console.log()
        setFormValues({...formValues,"blood_pressure":e.target.value})
    }
    
    const [height,setHeight] = useState("")
    const heightChange = (e) => {
        setHeight(e.target.value)
        console.log()
        setFormValues({...formValues,"height":e.target.value})
    }
    
    const [weight,setWeight] = useState("")
    const weightChange = (e) => {
        setWeight(e.target.value)
        console.log()
        setFormValues({...formValues,"weight":e.target.value})
    }

  
    count=0
    // const [validated,setValidated]=useState(false)
    const handleSubmit = () => {
        console.log("working")
        console.log(formValues)

        // let nurseData=formValues
        // setAbhaNumber(Number(abhaNumber))
        axios
        .post(`https://backend-v8da.onrender.com/nurseData`, {
            query:formValues
        })
        .then(function (res) {
            console.log(res);
            
        })
        .catch(function (err) {
            console.log(err);
        });
    }

    const patientQueue=JSON.parse(localStorage.getItem("patientQueue"))
    console.log("patientQueue")
    console.log(patientQueue)
    const [currPatientData,setCurrPatientData]=useState([])
    const queueString = JSON.stringify(patientQueue);

    const getCurrPatientdata = async () => {
        await fetch(`https://backend-v8da.onrender.com/patients/selected/?queue=${queueString}`)
            .then((response) => response.json())
            .then((data) => 
                setCurrPatientData(data))
    }
    useEffect(()=>{
        getCurrPatientdata()
    },[])

        
    console.log("currPatientData after Effect")
    console.log(currPatientData)

    const columns=[
        {field:"id",headerName:"ID",width:300},
        {field:"first_name",headerName:"First Name",width:200},
        {field:"last_name",headerName:"Last Name",width:200},
        {field:"sex",headerName:"Sex",width:200}
    ]
    const rows=
        currPatientData.map((item)=>{
            return({
                id:item.abha_number,
                first_name:item.first_name,
                last_name:item.last_name,
                sex:item.gender
            })
        })
    

    const [clickedPatient,setClickedPatient]=useState()
    const rowClicked=(e)=>{
        console.log("rowCliekce")
        setFormValues({...formValues,"abha":Number(e.row.id)})
        console.log(formValues)
        console.log("formValues")
        console.log(e.row.id)
        setAbha(e.row.id)
        localStorage.setItem("clickedPatient",e.row)
        setClickedPatient(e.row.id)

    }

    return(
        
        <div style={{margin:"" }} className="relative h-full m-auto max-h-screen rounded-xl transition-all duration-200 bg-white font-poppins   " id="panel">
            <div className="w-full px-10 py-6 " style={{ minHeight: '78vh' }}>
                <div className="flex gap-10 ">
                    <Box>

                        <h3 className="text-2xl font-semibold mb-4 ">Patient Details</h3>
                        <FormGroup style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}> 
                            <TextField variant="outlined" label="" name="abhaNumber" value={clickedPatient} placeholder="Enter ABHA Number" onChange={abhaChange} style={{ width: '100%'}} />
                            <TextField variant="outlined" label="Symptoms" name="symptoms" defaultValue="" placeholder="Enter Symptoms" onChange={symptomsChange} style={{ width: '100%' }} />
                            <TextField variant="outlined" label="Vitals" name="vitals" defaultValue="" placeholder="Enter Vitals" onChange={vitalsChange} style={{ width: '100%' }} />
                            <TextField variant="outlined" label="Age" name="age" defaultValue="" placeholder="Enter Age" onChange={ageChange} style={{ width: '100%' }} />
                            <TextField variant="outlined" label="Blood Pressure" name="blood_pressure" defaultValue="" placeholder="Enter Blood Pressure" onChange={bloodPressureChange} style={{ width: '100%' }} />
                            <TextField variant="outlined" label="Height" name="height" defaultValue="" placeholder="Enter Height" onChange={heightChange} style={{ width: '100%' }} />
                            <TextField variant="outlined" label="Weight" name="weight" defaultValue="" placeholder="Enter Weight" onChange={weightChange} style={{ width: '100%' }} />
                            <Button variant="contained" onClick={handleSubmit} sx={{fontSize:"20px",fontFamily:""}}>
                                Save
                            </Button>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </FormGroup>
                    </Box>
                    <Box>
                        <DataGrid
                            sx={{fontFamily:"poppins"}}
                            columns={columns}
                            rows={rows}
                            getRowHeight={() => '20px'}
                            onRowClick={(e)=>{
                                rowClicked(e)
                            }}/>
                    </Box>
                </div>

            </div>
        </div>
    )
}