import React,{useState} from 'react'
const Ex20 = () => {
 let[email,setemail]=useState("");
 const handleemailchange=(e)=>
 {
 email=e.target.value;
 }
 const handlesubmit=(e)=>
 {
 alert("Form Submitted")
 }
 return (  
 <form onSubmit={handlesubmit}>
 <label>Email:<input value={email} onChange={handleemailchange}/></label><br/>
 <button type="submit">Submit</button> <br/>
 </form>  
  )
}
export default Ex20;
