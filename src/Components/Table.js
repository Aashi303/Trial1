import React from 'react'

const Table = ({data}) => {

  return (
    <div>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll Number</th>
        </tr>
      </thead>
      <tbody>
        {data.map((student) => (
          <tr>
            <td>{student.name}</td>
            <td>{student.rollNumber}</td>
            <td>{student.batch}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}


export default Table
 
