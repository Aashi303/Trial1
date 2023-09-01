import React, {useState,useEffect } from 'react'

const Ex16 = () => {
    const[count,setcount]=useState(0);
    const[calculation,setcal]=useState(0);
    useEffect(()=>
     {
        alert("Clicked") 
     },[calculation]);

    // useEffect(()=>
    //  {
    //     alert("Clicked") 
    //  },[]);

     const changeCount=()=>{
        setcount(count+1);
     }

     const changeCalc=()=>{
        setcal(calculation+1);
     }

;
  return (
    <div>
      <button onClick={changeCount}>Button A {count}</button><br/>
    <button onClick={changeCalc}>Button B {calculation}</button>

    </div>
  )
}

export default Ex16
