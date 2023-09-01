import React, { useState, useEffect } from 'react';

const Ex18 = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
    const intervalId = setInterval(() => {
        // Update the currentTime state with the new time
        setCurrentTime(new Date());
      }, 1000);
    //   return () => {
    //     clearInterval(intervalId); // Clear the interval when the component unmounts or when currentTime changes.
    //   };
    },[]);

  return (
    <div>
      <h1>Current Time</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  )
}

export default Ex18
