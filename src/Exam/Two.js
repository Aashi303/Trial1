import React, { useContext } from 'react';
import { BackgroundContext,Textcontext } from './One'

const Two = () => {
    const Bcolor = useContext(BackgroundContext);
    const Tcolor=useContext(Textcontext)
  return (
    <div style={{ backgroundColor: Bcolor, width: '200px', height: '200px', color: Tcolor}}>
      <h2 align="center">Child Component</h2>
      <p align="center">Received Color: {Bcolor} and {Tcolor}</p>
    </div>
  )
}

export default Two
