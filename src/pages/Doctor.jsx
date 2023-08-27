import React from "react";
import SymptopmCard from "../components/SymptomCard";
import Healthcard from "../components/HealthCard";
import BloodCells from "../components/Blood_cells";
import logo from "../assets/images/output-removebg-preview.png";

export default function Doctor() {
  const avatar_images ={
    "Image1" : "https://doodleipsum.com/700/avatar?i=e9a99ae4926ef6cf11568ad0c27d11de",
    "Image2" : "https://doodleipsum.com/700/avatar-4?i=e961c3b3db59225a0691f90013b88c13",
    "Image3" : "https://doodleipsum.com/700/avatar-4?i=2048c47c8c7d48e9c5635229c0974ca8",
    "Image4" : "https://doodleipsum.com/700/avatar-4?i=58e15545cbaaccdde1e619aa57b6f85f",
    "Image5" : "https://doodleipsum.com/700/avatar-4?i=84120fcec3c4cc6fbd9cb06db3e98ff0"
  }

  
  const doctorPatient=JSON.parse(localStorage.getItem("doctorPatient"))
  console.log("doctorPatient")
  console.log(doctorPatient)
  const imageKeys = Object.keys(avatar_images);
  const randomImageKey = imageKeys[Math.floor(Math.random() * imageKeys.length)];
  const randomImageUrl = avatar_images[randomImageKey];

  return (
    <div className="grid grid-cols-2 p-5 ml-10 gap-x-10">
      <div className="flex justify-between gap-10">
        <div>
          <h1 className="font-bold text-4xl">Hi,{doctorPatient.first_name}</h1>
          <br />
          <h1 className="font-bold text-4xl">Today's Appointments</h1>
          <br />
        </div>
        <div>
          <button className="bg-blue-900 text-white p-2 rounded-md mt-10 hover:text-blue-900 hover:bg-white hover:border-2 hover:border-blue-900">
            View Accuracy
          </button>
          <div className="bg-blue-900 text-white p-2 rounded-md mt-5 hover:text-blue-900 hover:bg-white hover:border-2 hover:border-blue-900">
          {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center ml-auto">
        <img src={randomImageUrl} className="w-1/4 rounded-2xl bg-blue-300" alt="Doctor Avatar" />
        <h1 className="text-blue-900 font-bold text-center mt-3">Jami</h1>
        <h1 className="text-blue-900 font-bold">Aabha number</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 bg-slate-200 p-5 rounded-xl font-poppins">
        <Healthcard />
        <Healthcard />
        
      </div>
      <div className="flex gap-7  hover:shadow-xl bg-blue-100 p-5 rounded-xl justify-center">
        <SymptopmCard />
        <BloodCells />
        <SymptopmCard />
      </div>
      <div>
        <h1 className="font-bold text-4xl mt-7">Your Prescription</h1>
        <div className="flex gap-7 mt-5 rounded-lg bg-blue-100 p-5 mb-5">
          <div>
            <input placeholder="Morning" className="border-2 border-blue-900 mb-3"/><br/>
            <input placeholder="Afternoon"className="border-2 border-blue-900 mb-3"/><br/>
            <input placeholder="Eevening" className="border-2 border-blue-900 mb-3"/><br/>
          </div>
          <div>
            <input placeholder="Special Precautions" className="border-2 border-blue-900 mb-3"/><br/>
            <input placeholder="Special Notes" className="border-2 border-blue-900 mb-3"/><br/>
          </div>
        </div>
        <label className="text-white  bg-blue-900 p-2 rounded-xl hover:underline transition-all duration-500 ease out">Send to Pharmacy </label>
      </div>
      <div className="flex gap-7 mt-5 hover:shadow-xl bg-blue-100 p-5 rounded-xl justify-center">
        <SymptopmCard />
        <BloodCells />
        <SymptopmCard />
      </div>
    </div>
  );
}
