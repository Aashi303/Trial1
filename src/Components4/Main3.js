import React,{createContext} from 'react'
import Comp1 from './Comp1';

const Fname = createContext();
const Main3 = () => {
  return (
    < Fname.Provider value="ABC">
    <Comp1/> 
  </ Fname.Provider>

  )
}

export default Main3
export {Fname}