import React,{ useContext,createContext } from 'react';
import Comp3 from './Comp3';

const Email = createContext();
const Comp2 = () => {
  return (
    <div>
      < Email.Provider value="ankita@gmail.com">
   <Comp3/>
  </ Email.Provider>
    </div>
  )
}

export default Comp2
export {Email}
