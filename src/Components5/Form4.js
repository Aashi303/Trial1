import React, { useState } from 'react'
import Table from './Table';


const Form4 = () => {
    const [tableData, setTableData] = useState([])
    const[formdata,setformdata]=useState({});
    function handlechange(event){
        const name = event.target.name;
        const value = event.target.value;
        setformdata({...formdata, [name]: value})
        setTableData(formdata);
    }
    function handlesubmit(e)
    {
        e.preventDefault();
        const emailregex=/^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/;
        const passregex=/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if(!emailregex.test(formdata.eid))
        {
            alert("Please enter a valid Email ID");
        }
        else if(!passregex.test(formdata.pass))
        {
            alert("Password must contain atleast 8 characters ( Atleast 1 digit, 1 lowercase & 1 uppercase alphabets )");
        }
        else if(formdata.pass !== formdata.cpass){
            alert("password and confirm password must be same");
        }
        else{
            alert("Your form has been submitted.\n" + formdata.fname + " " + formdata.lname + " "+ formdata.eid)
            localStorage.setItem("msg",formdata.msg);
            window.location.pathname="/Home"
        }
    }

  return (
    <div>
      <form className="form-data" onSubmit={handlesubmit}>
        
        <label>First Name:</label>
        <input type="text" name="fname" onChange={handlechange} /><br/>
    
        <label>Last Name:</label>
        <input type="text" name="lname" onChange={handlechange} /><br/>

        <label>Email Id:</label>
        <input type="email" name="eid" onChange={handlechange} /><br/>

        <label>Password:</label>
        <input type="password" name="pass" onChange={handlechange} required/><br/>

        <label>Confirm Password:</label>
        <input type="password" name="cpass" onChange={handlechange} /><br/>

        <label>Message : </label>
        <textarea name="msg" onChange={handlechange} /><br/>
    
    <button type="submit">Submit</button> <br/>
    </form>
    <Table tableData={tableData}/>

    </div>
  )
}

export default Form4
