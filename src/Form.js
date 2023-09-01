import React from 'react'

const Form = () => {
    function handleSubmit (e) { 
                 e.preventDefault (); 
                 alert (' You clicked submit.'); 
        }
  return (
    <div>
      <form onSubmit = {handleSubmit}> 
        <button type="submit">Submit</button> 
      </form> 

    </div>
  )
}

export default Form
