import React from 'react'

const Event3 = () => {
    const arr=["ank","bin","cgh","d","egg"];
  return (
    <div>
       <h1>map function</h1> 
 { arr.filter((value)=> { 
 return <p>array values= {value.toUpperCase()}</p> 
 }) }

    </div>
  )
}

export default Event3
