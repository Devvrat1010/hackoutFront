import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react"

export default function SelectPatient() {
    const patientQueue=JSON.parse(localStorage.getItem("patientQueue"))
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
    
    const rowClicked=(e)=>{
        console.log(e)
        localStorage.setItem("clickedPatient",e.row)
    }


    return(
        <Box>
            <DataGrid
                columns={columns}
                rows={rows}
                getRowHeight={() => '20px'}
                onRowClick={(e)=>{
                    // console.log(e)
                    rowClicked(e)
                }}
            
            />

        </Box>
    )
}