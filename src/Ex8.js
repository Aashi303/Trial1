import React from 'react'
import img1 from "./Assets/img1.jpeg" 
import img2 from "./Assets/img2.jpeg"
import { useState } from "react";
const Ex8 = () => {
    const [myImage,setImage]=useState(img1);
    const changeImage = () => {
        if(myImage === img1){
            setImage(img2)
        }else{
            setImage(img1)
        }
    }

  return (
    <div>
      <img src={myImage} heigth="200px" width="200px" alt="logo" />
            <button onClick={changeImage}>Change Image</button>

    </div>
  )
}

export default Ex8
