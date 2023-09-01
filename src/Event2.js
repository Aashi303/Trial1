import React from 'react'

const Event2 = () => {
    function handleChange(event) { 
        console.log (event.target.value);
    }
  return (
    <div>
      <input type="text" name="firstName" onChange={handleChange} /> 

    </div>
  )
}

export default Event2
