import React from 'react'
import Table from './Table';

const studentsData = [
    { name: 'Student 7', rollNumber: '007' },
    { name: 'Student 8', rollNumber: '008' },
    { name: 'Student 9', rollNumber: '009' },
    // Add more students as needed
  ];
  
const Batch3 = () => {
  return (
    <div>
       <h2>Batch 3</h2>
        <Table data={studentsData}/>
    </div>
  )
}

export default Batch3
