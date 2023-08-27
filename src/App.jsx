import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reception from "./pages/Reception";
import Nurse from "./pages/Nurse";
import Doctor from "./pages/Doctor";
import ReceptionCounter from "./pages/ReceptionCounter";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
// import ReceptionLogin from "./pages/receptionLogin"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <div className="m-auto">
      <Routes>
        <Route path="/" element={<Reception />} />
        <Route path="/registration" element={<ReceptionCounter />} />
        <Route path="/nurse" element={<Nurse />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
