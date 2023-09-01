import React from 'react'
import { useState } from "react";
const Ex9 = () => {
    const[num1,setNum1]=useState("");
    const[num2,setNum2]=useState("");
    const[add,setAdd]=useState("");

    function changeNum1(event)
    {
      setNum1(event.target.value);
     }
    function changeNum2(event)
    {
      setNum2(event.target.value);         
    }
    function handleChange(){
      setAdd(parseInt(num1)+parseInt(num2))
    }
  return (
    <div>
      <div><input type="number" name="num1" value={num1} onChange={changeNum1} placeholder='Number 1'/></div>
        <div><input type="number" name="num2" value={num2} onChange={changeNum2} placeholder='Number 2'/></div>
        <h1>Number 1: {num1} Number 2: {num2}</h1>
        <button onClick={handleChange}>Addition</button>
        <h2>{add}</h2>
    </div>
  )
}

export default Ex9
