import React from 'react'
import img1 from "./Assets/img1.jpeg" 
import img2 from "./Assets/img2.jpeg"

const Map1 = () => {
    
        const images=[{ 
        id:1, 
        pic:img1, 
        }, 
        { 
            id:1, 
            pic:img2, 
            }, 
           ]; 
           
  return (
    <div>
      {images.map((val) => { 
            return <img src={val.pic} heigth="200px" width="200px" alt="logo" /> 
    })}
    </div>
  )
}

export default Map1
