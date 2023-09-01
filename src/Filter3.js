import React from 'react'

const Filter3 = () => {
    let students = [
      { age: "1", name: "Ankita", Branch: "CE" },
      { id: "002", name: "Nidhi", Branch: "CE" },
      { id: "003", name: "Foram", Branch: "CSE" },
      { id: "004", name: "Pooja", Branch: "CSE" },
      { id: "005", name: "Priyanka", Branch: "IT" }]
  return (
    <div>
      <h1>Multiplication of numbers are as under: </h1> 
    { 
            students.filter((value)=> 
                { 
                  if(value.age<40)
                  {
                    return <h2>{value.name}</h2> 
                  }
                     
                }) 
    } 

    </div>
  )
}

export default Filter3
