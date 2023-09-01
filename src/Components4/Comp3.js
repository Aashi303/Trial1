import React,{ useContext } from 'react';
import { Email } from './Comp2'

const Comp3 = () => {
    const value1 = useContext(Email);
  return (
    <div>
       <h1> {value1}</h1>
    </div>
  )
}

export default Comp3
