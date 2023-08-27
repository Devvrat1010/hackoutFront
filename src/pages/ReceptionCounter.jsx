import { Box,Button } from "@mui/material";
import FormReception from "../components/FormReception";
import { NavLink } from "react-router-dom";
import Login_NavBar from "../components/Login_NavBar";



export default function ReceptionCounter() {
    
    return(
        <Box>
            <Login_NavBar/>
            <FormReception/>
            <NavLink to={"/nurse"}>
                <Button variant="contained" color="primary" sx={{margin:"10px"}}>
                    Nurse
                </Button>
            </NavLink>
        </Box>
        
    )
}