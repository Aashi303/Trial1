import React from 'react';
import { useState } from 'react';


const Form2 = () => {
    const [formdata, setformdata] = useState({
        pizza:"Cheese Overload",
        cmmnt:"",
        size:"Medium"
    });
    // const onOptionChange=(e)=>
    // {
    //     setformdata({...formdata, size: e.target.value})
    // }
    // const handlepizza=(e)=>{
    //     setformdata({...formdata, pizza: e.target.value})
    // }
    // const handlecomment = (e) => {
    //     setformdata({...formdata, cmmnt: e.target.value})
    // }
    const handlesubmit=(e)=>{
        e.preventDefault();
        formdata.pizza=e.target.pizz.value;
        formdata.size=e.target.size.value;
        formdata.cmmnt=e.target.cmmnt.value;
        alert("Order has been placed"+formdata.pizza+" "+formdata.size+""+formdata.cmmnt); 
        
    }
    
  return (
    <div>
          <form onSubmit={handlesubmit}>
        <label><strong>Select Pizza</strong></label>
        <br/>
        <select name="pizz">
        <option value="Cheese Overload">Cheese Overload</option>
        <option value="margherita ">Margherita </option>
        <option value="Maxican">Maxican</option>
        <option value="Italian">Italian</option>
        </select>
        <br/>
        <label>Select Size</label>
        <br/>
        <input type='radio' name='size' value='Regular'  />
        <label>Regular</label>
        <input type='radio' name='size' value='Medium'   />
        <label>Medium</label>
        <input type='radio' name='size' value='Large'   />
        <label>Large</label>
        
        <br/>
        <label>Comment</label>
        <br/>
        <textarea name="cmmnt"  />
        
        {/* {
          (formdata.size == "Regular") && (
          <> <label>Name</label>
          <input type="text" required></input></>)
        } */}
        <br/>
         <button type='submit'>Submit</button>
    </form>
    
    <h1>
    Selected Pizza <strong>{formdata.size}  {formdata.pizza} </strong></h1>
    <h2>Additional comment : {formdata.cmmnt} </h2>

    </div>
  )
}

export default Form2
