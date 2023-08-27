// import output from '../assets/images/output.png'
import Logofinal from "../assets/images/Logofinal.png";
import { Link,useNavigate } from "react-router-dom";
import React from "react";
import { SignOutButton, useAuth } from "@clerk/clerk-react";


export default function Login_Navbar() {
    const navigate = useNavigate();
    const { isSignedIn } = useAuth();
  return (
    <div className="flex justify-between h-min bg-blue-800">
      <div className="">
        <img src="https://i.ibb.co/dcfztgK/Logofinal.png" className="h-24 " />
      </div>
      <div className="flex gap-20 mr-10 mt-0 text-end">
        
        <button
          className="group text-white opacity-95 tracking-tight transition-all duration-300 ease-in-out"
          onClick={()=>{navigate("/registration")}}
          >
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            <Link to="/registration">Reception</Link>
          </span>
        </button>
        <button
          className="group text-white opacity-95 tracking-tight transition-all duration-300 ease-in-out"
          onClick={()=>{navigate("/nurse")}}
          >
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          <Link to="/nurse">Nurse</Link>
          </span>
        </button>
        <button
          className="group text-white opacity-95 tracking-tight transition-all duration-300 ease-in-out"
          onClick={()=>{navigate("/doctor")}}
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          <Link to="/doctors">Doctors</Link>
          </span>
        </button>
        <div className="text-white mt-8">
                {isSignedIn && (
                <SignOutButton />
                )}
        </div>
      </div>
    </div>
  );
}
