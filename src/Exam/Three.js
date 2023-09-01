import React, { useState, useEffect } from 'react';
const Three = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/random_joke')
          .then((response) => response.json())
          .then((data) => setData(data));
      }, []);
  return (
    <div>
         <h1>Data from API</h1>
      <ul>
        {data.map((item) => (
          <li >{item.punchline}</li>
        ))}
      </ul>
      
    </div>
  )
}

export default Three
