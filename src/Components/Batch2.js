import React from 'react'
import Table from './Table';

const studentsData = [
    { name: 'Student 4', rollNumber: '004' },
    { name: 'Student 5', rollNumber: '005' },
    { name: 'Student 6', rollNumber: '006' },
    // Add more students as needed
  ];
  
const Batch2 = () => {
  return (
    <div>
      <h2>Batch 2</h2>
        <Table data={studentsData} />
    </div>
  )
}

export default Batch2
