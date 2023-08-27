import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import {DataGrid} from "@mui/x-data-grid"


export default function DoctorDetails(){

    const [temp,setTemp]=useState([])
    const getData=async ()=>{
        console.log("working")
            await fetch("http://localhost:3000/doctors")
            .then((response) => response.json())
            .then(data => setTemp(data) )
        }
    useEffect(()=>{
        getData()
    },[])
    console.log(temp)
    // let newTemp=[]
    // for (let i = 0; i < 10; i++) {
    //     newTemp.push(temp[i])
    // }
    // console.log(newTemp)

        
    const columns=[
        {field:"id",headerName:"ID",width:300},
        {field:"first_name",headerName:"First Name",width:100},
        {field:"last_name",headerName:"Last name",width:100 },
        {field:"age",headerName:"Age",width:50},
        {field:"sex",headerName:"sex",width:100},
        {field:"expertise",headerName:"expertise",width:200},
    ]
    const rows=
        temp.map((item)=>{
            return(
                {id:item.uid,
                first_name:item.first_name,
                last_name:item.last_name,
                age:item.age,
                sex:item.sex,
                expertise:item.expertise
                })
        })
    const clickedDoctor=(e)=>{
        console.log(e)
        const doctorPatient=JSON.stringify(e.row)
        localStorage.setItem("doctorPatient",doctorPatient)
        let x=localStorage.getItem("doctorPatient")
    }

    // const rows=
    //     temp.map((item)=>{
    //         return(

    //             {id:item.id,
    //             userId:item.userId,
    //             title:item.title,
    //             body:item.body}

    //         )
    //     })
    return(
        <Box>
             <DataGrid
                    columns={columns}
                    rows={rows}
                    getRowHeight={() => '20px'}
                    onRowClick={(e)=>clickedDoctor(e)}
                    // pageSizeOptions={[5,10,20]}
                    initialState={{
                        // ...data.initialState,
                        pagination: { paginationModel: { pageSize: 10 } },
                      }}
                      pageSizeOptions={[ 10, 20,30]}
                />  

        </Box>

    )
}