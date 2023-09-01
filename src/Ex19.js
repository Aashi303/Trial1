import React from 'react'

const Ex19 = () => {
    const handleclick = () => {
        alert ('Welcome to LJU');
        }
  return (
    <div>
      <center>
<button onClick={handleclick()}>Click me</button>
</center>

    </div>
  )
}

export default Ex19
