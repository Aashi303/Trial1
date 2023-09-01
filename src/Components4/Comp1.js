import React,{ useContext } from 'react';
import { Fname } from './Main3'
import Comp2 from './Comp2';


const Comp1 = () => {
  const value = useContext(Fname);
  
  return (
    <div>
     <h1> {value}</h1>
     <Comp2/>
    </div>
  )
}

export default Comp1
