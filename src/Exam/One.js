import React, { useState,createContext } from 'react';
import Two from './Two';
import { useActionData } from 'react-router-dom';

const BackgroundContext = createContext();
const Textcontext = createContext();

const One = () => {
    const [c,setc]=useState("")
    function addc(){
        setc(BackgroundContext)
    }
  return (
    <div>
      <BackgroundContext.Provider value={'red'}>
        <Textcontext.Provider value={'blue'}>
        <Two/>
        </Textcontext.Provider>
      </BackgroundContext.Provider>
    </div>
  )
}

export default One
export {BackgroundContext,Textcontext}
