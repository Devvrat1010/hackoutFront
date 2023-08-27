import { avatarClasses } from "@mui/material";
import React from "react";

export default function Card() {
  const avatarImages = {
    "Image1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKHIxILbBQj2FzRponlr6aDVYiI0Vg4cu2Uh2HCNO_dXa6V8BYHY4-GpqLwaGjQNI4G4&usqp=CAU",
    "Image3" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhqntaLxRy3JjDpHZMenmsACcAA-4-9NjeQ&usqp=CAU",
    "Image4": "https://cutewallpaper.org/26/avatar-images-free-download/cartoon-avatar-png-images-with-transparent-background-free-download-on-lovepik.png",
    "Image5": "https://img.freepik.com/premium-photo/man-with-glasses-tie-with-tie-it_745528-2818.jpg?w=360"
  };

  const imageKeys = Object.keys(avatarImages);
  const randomImageKey = imageKeys[Math.floor(Math.random() * imageKeys.length)];
  const randomImageUrl = avatarImages[randomImageKey];
  
  return (
  <div className="bg-blue-900 w-fit text-white ">
    <div>
      <img src={randomImageUrl} alt="Avatar"  />
    </div>
    <div>
      Name
    </div>
    <div>
      Specialization
    </div>
  </div>);
}