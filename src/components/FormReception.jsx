import { Box,FormGroup,TextField,Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import registration from '../assets/images/registration.png'

export default function FormReception(){
    const navigate = useNavigate();

    const [formValues,setFormValues]=useState({abhaNumber:""})
    const [abhaError,setAbhaError] = useState("")
    const [abhaNumber,setAbhaNumber] = useState()
    const [countPatient,setCountPatient] = useState(1)
    const [patientQueue,setPatientQueue] = useState([])
    let curr=0
    const changeAbhaNumber = (e) => {
        setAbhaNumber(e.target.value)
        console.log(e.target.value)
        setFormValues({...formValues,"abhaNumber":e.target.value})
    }
    const validateAbhaNumber = () => {
        curr=countPatient+1
        if (!formValues.abhaNumber || !formValues.abhaNumber.length ) {
            setAbhaError("Abha Number is required")
        }
        else if(formValues.abhaNumber.length<12 || Number.isNaN(abhaNumber)){
            setAbhaError("Invalid ABHA Number")
        }
        else{
            setAbhaError("")
            setCountPatient(countPatient+1)
            let temp=patientQueue
            temp.pop()
            setPatientQueue([])
            temp.push(Number(abhaNumber))
            console.log(temp)
            console.log("temp")

            setPatientQueue([...patientQueue,temp])
            setPatientQueue([...patientQueue,123])

            console.log("working")
                cityFetch()

        }
    }
    const cityFetch=async ()=>{
        console.log(countPatient)
        localStorage.setItem("count",countPatient)
          
          const stringifiedPatientQueue =
            JSON.stringify(patientQueue)
            
          localStorage.setItem(
            "patientQueue",
            stringifiedPatientQueue
          )

        console.log("working")
        setAbhaNumber(Number(abhaNumber))
        axios
        .post(`https://backend-v8da.onrender.com/reception/uploadAbha`, {
            abhaNumber:abhaNumber
        })
        .then(function (res) {
            console.log(res);
            
        })
        .catch(function (err) {
            console.log(err);
        });
        // navigate("/nurse")
    }

    return (

<div>
<nav className="bg-blue-900">
  {/* Navigation content */}
</nav>

<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
    <div className="text-center">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Reception Portal
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
              {/* SVG pattern */}
            </svg>
            <span className="relative"></span>
          </span>
          <span className="text-blue-900">Digitizing healthcare</span> for a seamless experience
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          ENTER ABHA NUMBER
        </p>
      </div>
      <div className="flex justify-center items-center h-full">
        <FormGroup sx={{ m: '0 16px' }}>
          <TextField
            id="outlined-basic"
            label="Abha Number"
            variant="outlined"
            fullWidth
            sx={{ maxWidth: '300px'}}
            onChange={changeAbhaNumber}
            error={abhaError && abhaError.length ? true : false}
            helperText={abhaError}
          />
        </FormGroup>
        <Button onClick={validateAbhaNumber} variant="contained" >  
          Submit
        </Button>
        <NavLink to={"/nurse"}>
            <Button variant="contained" color="primary" sx={{margin:"10px"}}>
                Nurse
            </Button>
        </NavLink>
      </div>
      {/* <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="Profile"
        className="h-8 w-8 rounded-full mx-auto my-4"
      /> */}
      {/* <a
        href="/"
        aria-label="Scroll down"
        className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
        </svg>
      </a> */}
    </div>
  </div>
</div>
</div>
);
}