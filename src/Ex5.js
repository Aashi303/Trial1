import { useState } from "react";
import React from 'react'

const Ex5 = () => {
    const [count, setCount] = useState(0);
   
    const handleCount= () =>{
      setCount(count+1)
    }
  
  return (
    <div>
        <p>You clicked {count} times</p>
      <button onClick={handleCount}>
        Click me
      </button>

    </div>
  )
}

export default Ex5
