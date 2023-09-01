import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Ex15 = () => {
    const[joke,setjoke]=useState("");
    useEffect(()=>
    {
      axios
      .get("https://www.boredapi.com/api/activity1")
      .then((response)=>{
          //const{activity,type}=response.data;
          setjoke(response.data1);
      })
      .catch((error)=>
      {
          console.log(error);
      });
    })
   
    //if (!joke) return null;
  return (
    <div>
      <div>
        <h1>Random Joke Generator</h1>
       {/* <button onClick={()=>fetchjoke()}>Add Joke</button> */}
        <p>{joke.activity}</p>
    </div>
    </div>
  )
}

export default Ex15

 