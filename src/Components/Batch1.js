import React from 'react'
import Table from './Table';

const studentsData = [
    { name: 'Student 1', rollNumber: '001' },
    { name: 'Student 2', rollNumber: '002' },
    { name: 'Student 3', rollNumber: '003' },
    // Add more students as needed
  ];
  
const Batch1 = () => {
  return (
    <div>
      <h2>Batch 1</h2>
        <Table data={studentsData}/>
    </div>
  )
}

export default Batch1
