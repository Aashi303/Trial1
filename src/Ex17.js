import { useState, useEffect } from 'react';

const Ex17 = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
      setInterval(() => {
        setDate(new Date());
      }, 1000)
    }, [])
    // setInterval(() => {
    //     setDate(new Date());
    //   }, 1000)
  return (
    <h1>
      Time using Localtimestring - {date.toLocaleTimeString()}<br/>
      Hour-{date.getHours()}:Min-{date.getMinutes()}:Sec-{date.getSeconds()} 
    </h1>

  )
}

export default Ex17
