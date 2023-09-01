import React from 'react'

const Filter2 = () => {
    let students = [
        { id: "001", name: "Ankita", Branch: "CE" },
        { id: "002", name: "Nidhi", Branch: "CE" },
        { id: "003", name: "Foram", Branch: "CSE" },
        { id: "004", name: "Pooja", Branch: "CSE" },
        { id: "005", name: "Priyanka", Branch: "IT" }
    ]
    let CSE = students.filter(function (student) {
        return student.Branch === "CSE";
    }).map(function (student) {
        return student.name;
    })
    let arr1=CSE.join(",");  
  
  return (
    <div>
      <h1> {arr1} </h1>
    </div>
  )
}

export default Filter2
